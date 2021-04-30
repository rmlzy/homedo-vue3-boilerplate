import { ColumnProps } from "ant-design-vue/lib/table/interface";
import { IPagination } from "@/core/interface";

export interface IState {
  loading: boolean;
  selectedKeys: string[];
  columns: ColumnProps[];
  records: ITableRow[];
  pagination: IPagination;
}

export interface IQuery {
  query1?: string;
  query2?: string;
  query3?: string;
  query4?: string;
  query5?: string;
  query6?: string;
}

export interface ITableRow {
  id?: number;
  table1?: string;
  table2?: string;
  table3?: string;
  table4?: string;
  table5?: string;
  table6?: string;
  table7?: string;
  table8?: string;
  table9?: string;
  table10?: string;
}

export interface IResult {
  total: number;
  records: ITableRow[];
}
