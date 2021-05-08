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
  PageHeader,
  Descriptions,
  Tabs,
  Row,
  Col,
  message,
  Skeleton,
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
    .use(Select)
    .use(PageHeader)
    .use(Descriptions)
    .use(Tabs)
    .use(Row)
    .use(Col)
    .use(Skeleton);

  message.config({
    maxCount: 1,
  });
}
