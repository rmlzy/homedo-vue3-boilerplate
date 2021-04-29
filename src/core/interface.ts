export interface IResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface IPaginate<T> {
  pageIndex: number;
  pageSize: number;
  total: number;
  items: T[];
}

export interface ITablePager {
  pageIndex: number;
  pageSize: number;
  total: number;
}
