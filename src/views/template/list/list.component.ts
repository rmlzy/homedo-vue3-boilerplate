import { defineComponent, reactive, ref, toRefs, toRaw, onMounted } from "vue";
import { defaultQueryForm, defaultState } from "./list.constant";
import { fetchTableData } from "./list.service";

export default defineComponent({
  name: "TemplateList",
  setup() {
    const queryRef = ref();
    const queryForm = reactive(defaultQueryForm);
    const state = reactive(defaultState);

    const search = async () => {
      state.loading = true;
      const { total, records } = await fetchTableData(toRaw(queryForm), state.pagination);
      state.pagination.total = total;
      state.records = records;
      state.loading = false;
    };

    const reset = async () => {
      queryRef.value.resetFields();
      await search();
    };

    const onSelectionChange = (keys: string[]) => {
      state.selectedKeys = keys;
    };

    onMounted(() => {
      search();
    });

    return {
      queryRef,
      queryForm,
      ...toRefs(state),
      reset,
      search,
      onSelectionChange,
    };
  },
});
