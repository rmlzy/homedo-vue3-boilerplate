import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";

const { Footer: ALayoutFooter } = Layout;

export default defineComponent({
  name: "PageFooter",
  components: { ALayoutFooter },
  setup() {
    return () => <>Footer</>;
  },
});
