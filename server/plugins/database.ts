import { Database } from '../utils/db'
/**
 * Nitro プラグインを定義し、初回起動時にデータベースをインスタンス化します。
 *
 * @description
 * このプラグインは Nitro サーバーの起動時に実行されます。
 * `Database.getInstance()` メソッドを呼び出すことで、データベースのシングルトンインスタンスを取得し、初期化します。
 * データベース接続は、アプリケーションのライフサイクルに合わせて一度だけ初期化されます。
 * これにより、アプリケーションが起動するたびにデータベース接続が確立されます。
 */
export default defineNitroPlugin(async () => {
  await Database.getInstance()
})
