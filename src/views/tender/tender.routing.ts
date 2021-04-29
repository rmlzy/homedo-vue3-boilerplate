import { RouterView } from "vue-router";
import { ApplyRouting } from "./apply/apply.routing";
import { MaterialRouting } from "./material/material.routing";
import { ReconnoiterRouting } from "./reconnoiter/reconnoiter.routing";
import { EarnestMoneyRouting } from "./earnest-money/earnest-money.routing";
import { QuoteRouting } from "./quote/quote.routing";
import { DocRouting } from "./doc/doc.routing";
import { BidManageRouting } from "./bid-manage/bid-manage.routing";

export const TenderRouting = {
  path: "/tender",
  name: "tender",
  redirect: "/tender/apply/list",
  component: RouterView,
  meta: { title: "投标管理", icon: "cailiao" },
  children: [
    ...ApplyRouting,
    ...MaterialRouting,
    ...ReconnoiterRouting,
    ...EarnestMoneyRouting,
    ...QuoteRouting,
    ...DocRouting,
    ...BidManageRouting,
  ],
};
