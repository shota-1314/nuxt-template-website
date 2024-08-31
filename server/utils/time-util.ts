import { format } from 'date-fns-tz'

/**
 * 現在の日時を日本時間 (Asia/Tokyo) でフォーマットされた文字列として取得します。
 *
 * @returns {string} フォーマットされた現在の日時。形式は「yyyy-MM-dd HH:mm:ss」。
 * @description
 * この関数は、現在の日時を取得し、日本標準時 (JST) でフォーマットします。
 * `date-fns-tz` ライブラリの `format` 関数を使用して、指定されたタイムゾーンで日時をフォーマットします。
 * タイムゾーンは `Asia/Tokyo` に設定されています。
 */
export function getCurrentTime(): string {
  const now = new Date()
  const timeZone = 'Asia/Tokyo'
  return format(now, 'yyyy-MM-dd HH:mm:ss', { timeZone })
}
