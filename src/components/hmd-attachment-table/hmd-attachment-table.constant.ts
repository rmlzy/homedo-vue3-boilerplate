export const tableColumns = [
  {
    title: "文件名称",
    dataIndex: "table1",
    key: "table1",
  },
  {
    title: "文件大小",
    width: 160,
    dataIndex: "table2",
    key: "table2",
  },
  {
    title: "上传人",
    width: 160,
    dataIndex: "table3",
    key: "table3",
  },
  {
    title: "上传时间",
    width: 160,
    dataIndex: "table4",
    key: "table5",
  },
  {
    title: "操作",
    width: 160,
    slots: { customRender: "action" },
  },
];
