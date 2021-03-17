/**
 * Ответ сервера:
 * success {Boolean} - флаг успешности запроса, True - в случае успеха
 * error {String} (optional) - текст ошибки, если success == False
 * data {Object} - содержание ответа
 */
export interface Response<T> {
  success: boolean;
  error?:string;
  data: T;
};