import { defineComponent, PropType, ref } from "vue";
import { IFontColor } from "./hmd-font.interface";

export default defineComponent({
  name: "HmdFont",
  props: {
    color: {
      type: String as PropType<IFontColor>,
      default: IFontColor.DEFAULT,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const color = ref<IFontColor>(props.color);
    return { color };
  },
});
