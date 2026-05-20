export const company = {
  name: "木又软件开发有限公司",
  brand: "Muyou Software",
  altBrand: "MooYoo Tech",
  phone: "13566802517",
  email: "1091482262@qq.com",
  address: "浙江省台州市台州湾新区数字贸易产业创新基地",
  hours: "周一至周五 9:00-18:00"
};

export const services = [
  {
    title: "软件开发",
    summary: "Web应用 · 小程序 · 企业管理系统 · SaaS平台 · API服务",
    description:
      "从业务流程梳理到系统上线，提供高可用、可扩展、易维护的企业级软件定制开发。",
    tags: ["Web应用", "小程序", "ERP/CRM", "SaaS平台", "API集成"],
    deliverables: ["需求文档", "UI原型", "前后端开发", "自动化测试", "Vercel/云部署"]
  },
  {
    title: "AI智能体开发",
    summary: "企业私有AI Agent · RAG知识库 · 多智能体协作 · LLM应用",
    description:
      "围绕企业知识、业务流程和客户触点，定制可落地的AI Agent与智能自动化系统。",
    tags: ["AI Agent", "RAG知识库", "智能客服", "销售助手", "自动化工作流"],
    deliverables: ["知识库清洗", "Agent编排", "权限隔离", "私有化部署", "效果评估"]
  },
  {
    title: "AI辅助开发",
    summary: "需求→设计→编码→测试，全链路AI加速",
    description:
      "深度使用AI工具进行需求拆解、架构推演、代码生成、测试覆盖与部署编排。"
  },
  {
    title: "技术咨询",
    summary: "架构设计 · 技术选型 · AI转型方案",
    description:
      "帮助团队判断AI落地路径，规划技术架构、成本结构和阶段性建设路线。"
  }
];

export const advantages = [
  {
    title: "极速交付",
    value: 5,
    suffix: "x",
    label: "速度提升",
    description: "传统3个月的项目，我们可在3周左右完成可上线版本。"
  },
  {
    title: "降本增效",
    value: 40,
    suffix: "%+",
    label: "成本降低",
    description: "AI自动化编码与测试减少重复劳动，让预算投入到关键业务。"
  },
  {
    title: "品质保障",
    value: 100,
    suffix: "%",
    label: "测试覆盖目标",
    description: "AI辅助Code Review与自动化测试，降低上线后的隐藏风险。"
  },
  {
    title: "持续进化",
    value: 24,
    suffix: "h",
    label: "主动监控",
    description: "项目交付后持续监控核心指标，基于数据主动优化迭代。"
  }
];

export const processSteps = [
  {
    title: "需求分析",
    description: "AI辅助需求拆解与文档生成"
  },
  {
    title: "原型设计",
    description: "AI生成UI原型，快速验证"
  },
  {
    title: "智能编码",
    description: "Copilot + 自建Agent辅助开发"
  },
  {
    title: "自动化测试",
    description: "AI生成测试用例，覆盖关键链路"
  },
  {
    title: "一键部署",
    description: "CI/CD自动化，快速上线"
  },
  {
    title: "持续优化",
    description: "AI监控 + 数据驱动迭代"
  }
];

export const cases = [
  {
    id: "commerce-agent",
    title: "某电商企业智能客服Agent",
    category: "AI智能体",
    image: "/images/case-agent.svg",
    tags: ["RAG", "智能客服", "LLM"],
    summary: "基于RAG的7×24小时智能客服，常见问题解决率提升至92%。",
    detail:
      "整合商品、订单、售后与活动规则知识库，支持多轮问答、工单转接和质检回放。",
    stack: ["Next.js", "LangChain", "OpenAI", "PostgreSQL", "Redis"],
    result: "人工客服压力下降58%，高峰期响应时间缩短至3秒内。"
  },
  {
    id: "manufacturing-erp",
    title: "某制造企业ERP管理系统",
    category: "企业系统",
    image: "/images/case-erp.svg",
    tags: ["ERP", "数据看板", "权限系统"],
    summary: "AI辅助开发，3周交付采购、库存、生产和财务模块。",
    detail:
      "围绕工单流转、库存预警和生产进度搭建统一管理平台，并接入权限与审批流程。",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    result: "跨部门协作效率提升43%，库存异常发现提前2天。"
  },
  {
    id: "education-ai",
    title: "某教育机构AI学习助手",
    category: "AI智能体",
    image: "/images/case-education.svg",
    tags: ["多智能体", "学习推荐", "私有知识库"],
    summary: "多智能体协作的个性化学习推荐系统，提升学员留存。",
    detail:
      "构建答疑、测评、规划与督学Agent，让学习路径根据学生反馈动态调整。",
    stack: ["Next.js", "Python", "LangChain", "Supabase", "Tailwind CSS"],
    result: "学员7日活跃率提升31%，教师重复答疑减少46%。"
  },
  {
    id: "gov-dashboard",
    title: "某政府部门数据可视化大屏",
    category: "软件开发",
    image: "/images/case-dashboard.svg",
    tags: ["数据可视化", "AI预测", "实时大屏"],
    summary: "实时数据接入与AI预测分析，辅助管理者做趋势研判。",
    detail:
      "聚合多源数据，建立指标体系、异常预警和趋势预测模块，用于日常调度。",
    stack: ["React", "ECharts", "Node.js", "PostgreSQL", "Docker"],
    result: "数据汇总耗时从半天降至分钟级，指标异常自动提醒。"
  },
  {
    id: "sales-assistant",
    title: "B2B销售助手工作流",
    category: "AI智能体",
    image: "/images/case-sales.svg",
    tags: ["销售助手", "工作流", "CRM"],
    summary: "自动生成客户画像、跟进建议和话术草稿，提升销售动作质量。",
    detail:
      "接入CRM、邮件与企业资料库，让Agent在客户推进节点自动输出下一步建议。",
    stack: ["OpenAI", "Node.js", "Redis", "PostgreSQL", "Webhook"],
    result: "销售跟进准备时间减少62%，线索转化率提升18%。"
  },
  {
    id: "saas-platform",
    title: "行业SaaS运营平台",
    category: "软件开发",
    image: "/images/case-saas.svg",
    tags: ["SaaS", "订阅计费", "多租户"],
    summary: "面向垂直行业的多租户SaaS平台，支持订阅、权限和数据隔离。",
    detail:
      "完成租户管理、角色权限、仪表盘、订阅套餐与开放API，支持快速复制销售。",
    stack: ["Next.js", "TypeScript", "Stripe", "Supabase", "Vercel"],
    result: "MVP在4周上线，首批客户可直接试用和付费。"
  }
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "LangChain",
  "OpenAI",
  "Docker",
  "Supabase",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Redis"
];

export const stats = [
  { value: 50, suffix: "+", label: "服务客户" },
  { value: 200, suffix: "+", label: "完成项目" },
  { value: 3, suffix: "x", label: "交付速度" },
  { value: 98, suffix: "%", label: "客户满意度" }
];

export const team = [
  {
    name: "林知行",
    role: "AI解决方案架构师",
    avatar: "/images/avatar-1.svg",
    bio: "负责Agent架构、RAG链路与企业AI落地方案设计。"
  },
  {
    name: "陈若川",
    role: "全栈开发负责人",
    avatar: "/images/avatar-2.svg",
    bio: "专注Next.js、SaaS平台、企业系统与工程质量体系。"
  },
  {
    name: "许一鸣",
    role: "自动化工作流工程师",
    avatar: "/images/avatar-3.svg",
    bio: "负责多系统集成、自动化流程和数据链路编排。"
  },
  {
    name: "周予安",
    role: "产品与交付顾问",
    avatar: "/images/avatar-4.svg",
    bio: "把复杂业务需求拆成可交付、可验证、可迭代的产品路径。"
  }
];
