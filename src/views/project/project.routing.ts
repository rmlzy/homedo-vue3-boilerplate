import { RouterView } from "vue-router";
import { FormOutlined } from "@ant-design/icons-vue";
import { ProfileRouting } from "./profile/profile.routing";
import { FollowRouting } from "./follow/follow.routing";
import { SolutionRouting } from "./solution/solution.routing";

export const ProjectRouting = {
  path: "/project",
  name: "project",
  redirect: "/project/profile/list",
  component: RouterView,
  meta: { title: "项目备案", icon: FormOutlined },
  children: [...ProfileRouting, ...FollowRouting, ...SolutionRouting],
};
