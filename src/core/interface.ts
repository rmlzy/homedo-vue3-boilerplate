export interface IResponse<T> {
  respCode: string;
  respDesc: string;
  data: T;
}

export interface IPaginate<T> {
  current: number;
  size: number;
  total: number;
  records: T[];
}

export interface IPagination {
  current: number;
  size: number;
  total: number;
}
