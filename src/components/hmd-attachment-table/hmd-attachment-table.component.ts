import { defineComponent, reactive, toRefs } from "vue";
import { tableColumns } from "./hmd-attachment-table.constant";

export default defineComponent({
  name: "HmdAttachmentTable",
  setup(props, { attrs, slots, emit }) {
    const state = reactive({
      loading: false,
      tableData: [],
    });
    return {
      ...toRefs(state),
      tableColumns,
    };
  },
});
