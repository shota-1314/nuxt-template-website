/**
 * GenericObject
 * @description
 * 任意のオブジェクトの型を表します。
 * キーは文字列であり、値の型は任意の型を取ることができます。
 * この型は、特定の構造を持たない汎用的なオブジェクトを表現するために使用されます。
 * 具体的には、キーが文字列で、値が任意の型であるオブジェクト全般に対応します。
 */
export interface GenericObject {
  [key: string]: any
}

/**
 * ApiResponseObject
 * @description
 * API レスポンスの構造を表す型です。
 * - `success`: レスポンスが成功したかどうかを示すブール値。
 * - `data`: クエリの結果として得られたオブジェクトの配列。`GenericObject` 型であり、各オブジェクトは SELECT 文の結果を表します。
 *           配列が存在しない場合、またはレスポンスがデータを返さない場合に `null` である可能性もあります。
 * - `message`: レスポンスに関連するメッセージ。成功、エラー、その他の情報を含む文字列です。
 * - `token` (オプショナル): 認証トークン。レスポンスに含まれる場合もあれば、含まれない場合もあります。文字列型です。
 */
export interface ApiRsponseObject {
  success: boolean
  data: GenericObject[] | null
  message: string
  token?: string
}
