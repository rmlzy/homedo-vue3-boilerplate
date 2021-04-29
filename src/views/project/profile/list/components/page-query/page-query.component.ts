import { defineComponent, reactive, ref, toRaw } from "vue";

export default defineComponent({
  name: "PageQuery",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["reset", "search"],
  setup(props, { emit }) {
    const queryRef = ref();
    const queryForm = reactive({
      projectName: "",
      customerName: "",
      projectType: undefined,
      address: undefined,
      owner: undefined,
      projectStatus: undefined,
    });
    const reset = () => {
      queryRef.value.resetFields();
      emit("reset");
    };
    const search = () => {
      emit("search", toRaw(queryForm));
    };
    return {
      queryRef,
      queryForm,
      reset,
      search,
    };
  },
});
