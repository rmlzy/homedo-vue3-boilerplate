import type { App } from "vue";

import {
  Modal,
  Table,
  Menu,
  Input,
  Form,
  Card,
  Checkbox,
  Radio,
  Icon,
  Button,
  Divider,
  Select,
} from "ant-design-vue";

import "ant-design-vue/dist/antd.less";

export function setupAntDesign(app: App<Element>) {
  app
    .use(Form)
    .use(Input)
    .use(Modal)
    .use(Table)
    .use(Menu)
    .use(Card)
    .use(Checkbox)
    .use(Radio)
    .use(Icon)
    .use(Button)
    .use(Divider)
    .use(Select);
}
