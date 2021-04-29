export const tableColumns = [
  {
    title: "#",
    dataIndex: "index",
    width: 60,
    slots: { customRender: "index" },
  },
  {
    title: "项目名称",
    dataIndex: "projectName",
    key: "projectName",
  },
  {
    title: "客户名称",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "客户类型",
    dataIndex: "customerType",
    key: "customerType",
  },
  {
    title: "所在地区",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "业务员",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "审批状态",
    dataIndex: "auditStatus",
    key: "auditStatus",
  },
  {
    title: "项目状态",
    dataIndex: "projectStatus",
    key: "projectStatus",
  },
  {
    title: "最近更新人",
    dataIndex: "updateName",
    key: "updateName",
  },
  {
    title: "最近更新时间",
    dataIndex: "updateTime",
    key: "updateTime",
  },
];
