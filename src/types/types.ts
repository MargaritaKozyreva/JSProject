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


export interface User {
  id?: string | null,
  login: string | null,
  password: string | null,
  age?: number | null,
  fullname?: string | null,
  position_name?: string | null,
  gender?: string | null,
  subdivision?: string | null,
  company?: string | null,
  email?: string | null,
  phone?: string | null,
  address?: string | null,
  about?: string | null,
  registered?: number | null,
  birthday?: string | null,
  avatar?: string | null,
  isAdmin?: boolean | null
}

export interface ITheme {
  value: string
}