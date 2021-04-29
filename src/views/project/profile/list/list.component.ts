import { defineComponent, reactive, toRefs } from "vue";
import { message } from "ant-design-vue";
import { ColumnProps } from "ant-design-vue/lib/table/interface";
import { IPaginate, IResponse, ITablePager } from "@/core/interface";
import request from "@/utils/request";
import PageQuery from "./components/page-query/index.vue";
import { tableColumns } from "./list.constant";
import { ITableRow } from "./list.interface";

export default defineComponent({
  name: "ProjectProfileList",
  components: { PageQuery },
  setup() {
    const state = reactive<{
      tableLoading: boolean;
      tableSelectedKeys: string[];
      tableColumns: ColumnProps[];
      tableData: ITableRow[];
      tablePager: ITablePager;
    }>({
      tableLoading: false,
      tableSelectedKeys: [],
      tableColumns,
      tableData: [],
      tablePager: {
        pageIndex: 0,
        pageSize: 20,
        total: 0,
      },
    });
    const reset = () => {};
    const search = async (params) => {
      state.tableLoading = true;
      try {
        // const res: IResponse<IPaginate<ITableRow[]>> = request({
        //   method: "GET",
        //   url: "/demo",
        //   params,
        // });
      } catch (e) {
        message.error(e.message);
      } finally {
        state.tableLoading = false;
      }
    };
    const onSelectChange = (tableSelectedKeys) => {
      state.tableSelectedKeys = tableSelectedKeys;
    };
    return {
      ...toRefs(state),
      reset,
      search,
      onSelectChange,
    };
  },
});
