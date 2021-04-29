import { defineComponent, reactive, ref } from "vue";
import { PasswordInput } from "./components";
import { formRules } from "./login.constant";
import { IFormData } from "./login.interface";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "login-page",
  components: {
    PasswordInput,
  },
  setup() {
    const router = useRouter();
    const submitting = ref(false);
    const formRef = ref();
    const formData: IFormData = reactive({
      username: "",
      password: "",
      remember: false,
    });
    const submit = () => {
      submitting.value = true;
      formRef.value
        .validate()
        .then(() => {
          router.push("/dashboard");
        })
        .catch(() => {})
        .finally(() => {
          submitting.value = false;
        });
    };
    return {
      submitting,
      formRef,
      formData,
      formRules,
      submit,
    };
  },
});
