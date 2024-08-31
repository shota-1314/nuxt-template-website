import pg from 'pg'
import { getCurrentTime } from './time-util'
import type { GenericObject } from '~/types'

const { Pool } = pg

/**
 * Database クラスは、データベース接続とトランザクション管理を提供。
 * クラスはシングルトンパターンを用いて、アプリケーション全体で
 * 一つのインスタンスのみを使用する想定。
 */
export class Database {
  private static instance: Database
  private dbConnection: pg.Pool

  /**
   * Database クラスのコンストラクタです。
   * データベース接続プールを初期化し、データベースへの接続を試みます。
   * @throws {Error} データベース接続エラーが発生した場合にスローされます
   */
  constructor() {
    this.dbConnection = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      ssl: {
        rejectUnauthorized: false,
      },
    })
    this.connect()
  }

  /**
   * シングルトンインスタンスを取得します。
   * インスタンスがまだ作成されていない場合は、新しく作成します。
   * @returns {Database} Databaseクラスのシングルトンインスタンス
   */
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  /**
   * データベースに接続します。
   * 接続が成功した場合は、成功メッセージをログに記録します。
   * 接続に失敗した場合は、エラーメッセージをログに記録し、エラーをスローします。
   * @throws {Error} 接続エラーが発生した場合にスローされます
   */
  private async connect() {
    try {
      await this.dbConnection.connect()
      console.info(`${getCurrentTime()} : DB接続成功`)
    }
    catch (err) {
      if (err instanceof Error) {
        console.error(`${getCurrentTime()} : DB接続失敗`, err.message)
      }
      else {
        console.error(`${getCurrentTime()} : DB接続失敗`, '不明なエラー')
      }
      throw err
    }
  }

  /**
   * トランザクションをコミットします。
   * コミットに成功した場合は、その旨をログに記録します。
   * コミットに失敗した場合は、エラーメッセージをログに記録し、エラーをスローします。
   * @throws {Error} トランザクションコミットエラーが発生した場合にスローされます
   */
  public async startTransaction() {
    try {
      await this.dbConnection.query('BEGIN')
    }
    catch (err) {
      if (err instanceof Error) {
        console.error(`${getCurrentTime()} : トランザクション開始失敗`, err.message)
      }
      else {
        console.error(`${getCurrentTime()} : トランザクション開始失敗`, `不明なエラー`)
      }
      throw err
    }
  }

  /**
   * トランザクションを開始します。
   * トランザクション開始に成功した場合は、その旨をログに記録します。
   * トランザクション開始に失敗した場合は、エラーメッセージをログに記録し、エラーをスローします。
   * @throws {Error} トランザクション開始エラーが発生した場合にスローされます
   */
  public async commit() {
    try {
      await this.dbConnection.query('COMMIT')
    }
    catch (err) {
      if (err instanceof Error) {
        console.error(`${getCurrentTime()} : トランザクションコミット失敗`, err.message)
      }
      else {
        console.error(`${getCurrentTime()} : トランザクションコミット失敗`, `不明なエラー`)
      }
      throw err
    }
  }

  /**
   * トランザクションをロールバックします。
   * ロールバックに成功した場合は、その旨をログに記録します。
   * ロールバックに失敗した場合は、エラーメッセージをログに記録し、エラーをスローします。
   * @throws {Error} トランザクションロールバックエラーが発生した場合にスローされます
   */
  public async roolback() {
    try {
      await this.dbConnection.query('ROLLBACK')
    }
    catch (err) {
      if (err instanceof Error) {
        console.error(`${getCurrentTime()} : トランザクションロールバック失敗`, err.message)
      }
      else {
        console.error(`${getCurrentTime()} : トランザクションロールバック失敗`, '不明なエラー')
      }
      throw err
    }
  }

  /**
   * SQLクエリを実行し、結果を返します。
   * クエリ実行に失敗した場合は、エラーメッセージをログに記録し、ロールバックを行い、エラーをスローします。
   * @param {string} sql 実行するSQLクエリ
   * @returns {Promise<GenericObject[]>} クエリ結果の配列（キーが文字列、値が任意の型のオブジェクト）
   * @throws {Error} クエリ実行エラーが発生した場合にスローされます
   */
  public async query(sql: string): Promise<GenericObject[]> {
    try {
      const result = await this.dbConnection.query(sql)
      console.info(`${getCurrentTime()} : クエリ実行成功`)
      return result.rows as GenericObject[]
    }
    catch (e) {
      if (e instanceof Error) {
        console.error(`${getCurrentTime()} : クエリ実行に失敗しました: ${e.message}`)
      }
      else {
        console.error(`${getCurrentTime()} : クエリ実行に失敗しました: 不明なエラー`)
      }
      await this.dbConnection.query('ROLLBACK')
      throw e
    }
  }
}
