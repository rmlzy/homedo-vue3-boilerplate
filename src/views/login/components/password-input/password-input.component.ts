import { computed, defineComponent, ref } from "vue";
import {
  LockOutlined,
  UnlockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons-vue";
import { PwdTypeEnum } from "./password-input.interface";

export default defineComponent({
  name: "PasswordInput",
  components: {
    LockOutlined,
    UnlockOutlined,
    EyeOutlined,
    EyeInvisibleOutlined,
  },
  props: {
    value: String,
    valueModifiers: {
      default: () => ({}),
    },
  },
  emits: ["update:value"],
  setup(props, { emit }) {
    const passwordType = ref(PwdTypeEnum.PASSWORD);
    const togglePasswordType = () => {
      if (passwordType.value === PwdTypeEnum.PASSWORD) {
        passwordType.value = PwdTypeEnum.TEXT;
      } else {
        passwordType.value = PwdTypeEnum.PASSWORD;
      }
    };
    const onChange = ($event) => {
      emit("update:value", $event.target.value);
    };
    const isLock = computed(() => passwordType.value === PwdTypeEnum.PASSWORD);
    return {
      passwordType,
      isLock,
      togglePasswordType,
      onChange,
    };
  },
});
