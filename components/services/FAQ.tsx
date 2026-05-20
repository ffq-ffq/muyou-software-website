"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "一个AI智能体项目通常多久能上线？",
    answer:
      "如果业务边界清晰，常见客服、销售助手、知识库问答类项目通常2-4周可上线可用版本，后续根据数据持续迭代。"
  },
  {
    question: "企业内部资料能否私有化部署？",
    answer:
      "可以。我们支持私有化知识库、权限隔离、日志脱敏和本地/私有云部署，按企业安全要求选择模型与基础设施。"
  },
  {
    question: "软件开发如何报价？",
    answer:
      "通常按项目复杂度、页面/模块数量、系统集成难度和交付周期评估，也可采用阶段里程碑或长期技术伙伴模式。"
  },
  {
    question: "已有系统可以接入AI能力吗？",
    answer:
      "可以。我们会先评估现有系统API、数据库和业务流程，再设计最小侵入的Agent、RAG或自动化工作流接入方案。"
  }
];

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto mt-12 max-w-4xl space-y-3">
      {faqs.map((item, index) => (
        <div key={item.question} className="rounded-[8px] border border-white/10 bg-white/[0.03]">
          <button
            type="button"
            onClick={() => setActive(active === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-white"
          >
            {item.question}
            <ChevronDown
              className={cn("h-5 w-5 shrink-0 text-cyanGlow transition", active === index && "rotate-180")}
            />
          </button>
          <AnimatePresence initial={false}>
            {active === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-7 text-slate-400">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
