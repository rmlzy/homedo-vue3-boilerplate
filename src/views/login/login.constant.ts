// import { isChineseMobile } from "hmd-utils";

// move to hmd-utils
// const mobileValidator = (rule, value, callback) => {
//   if (!value) {
//     return callback(new Error("请输入"));
//   }
//   if (!isChineseMobile(value)) {
//     return callback(new Error("格式错误"));
//   }
//   return callback();
// };

export const formRules = {
  username: [
    { required: true, message: "请输入手机号" },
    // { validator: mobileValidator, message: "手机号格式错误" },
  ],
  password: [{ required: true, message: "请输入密码" }],
};
