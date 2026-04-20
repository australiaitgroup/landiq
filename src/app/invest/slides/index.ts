import { InvestCoverSlide } from "./InvestCoverSlide";
import { AUMarketSlide } from "./AUMarketSlide";
import { BusinessModelSlide } from "./BusinessModelSlide";
import { FinancialSlide } from "./FinancialSlide";
import { LeanTeamSlide } from "./LeanTeamSlide";
import { GTMSlide } from "./GTMSlide";
import { OperationsSlide } from "./OperationsSlide";
import { WhyRoundsSlide } from "./WhyRoundsSlide";
import { FundingSlide } from "./FundingSlide";
import { GrantsSlide } from "./GrantsSlide";
import { ExitSlide } from "./ExitSlide";
import { InvestCTASlide } from "./InvestCTASlide";

export const slides = [
  InvestCoverSlide,    // 0 — 封面
  AUMarketSlide,       // 1 — 澳洲市场
  BusinessModelSlide,  // 2 — 商业模式
  GTMSlide,            // 3 — 市场进入策略
  LeanTeamSlide,       // 4 — 精益团队
  OperationsSlide,     // 5 — 月度执行 & 开发成本
  FinancialSlide,      // 6 — 财务预测
  WhyRoundsSlide,      // 7 — 为什么要分轮融资（给房产投资人）
  FundingSlide,        // 8 — 融资路径
  GrantsSlide,         // 9 — 澳洲政府 Grants（非稀释资金）
  ExitSlide,           // 10 — 退出政策（M&A / IPO / Secondary）
  InvestCTASlide,      // 11 — CTA
];
