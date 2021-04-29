import { RouterView } from "vue-router";
import { ProfileRouting } from "./profile/profile.routing";
import { FollowRouting } from "./follow/follow.routing";
import { SolutionRouting } from "./solution/solution.routing";

export const ProjectRouting = {
  path: "/project",
  name: "project",
  redirect: "/project/profile/list",
  component: RouterView,
  meta: { title: "项目备案" },
  children: [...ProfileRouting, ...FollowRouting, ...SolutionRouting],
};
