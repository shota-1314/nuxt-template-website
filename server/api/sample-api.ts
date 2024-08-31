import { Database } from '../utils/db'
/**
 * APIエンドポイントハンドラーを定義します。
 * このハンドラーはデータベースからデータを取得し、トランザクションを管理します。
 * @returns {Object} 成功または失敗に応じたレスポンスオブジェクト
 */
export default defineEventHandler(async () => {
  // Databaseインスタンスを取得
  const db = Database.getInstance()
  try {
    // トランザクションを開始
    db.startTransaction()

    // SQLクエリを実行して、データを取得
    const response = await db.query('SELECT * FROM mst_tweet')

    // トランザクションをコミット
    db.commit()
    return {
      success: true,
      data: response,
      message: 'success',
    }
  }
  catch (error) {
    db.roolback()
    return {
      success: false,
      data: [],
      message: error instanceof Error ? error.message : '不明なエラーが発生しました',
    }
  }
})
