"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  phone: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  company: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const phoneValid = /^1[3-9]\d{9}$/.test(form.phone.trim());

    if (!form.name.trim() || !phoneValid || !form.message.trim()) {
      setError("请填写姓名、正确的手机号和需求描述。");
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-slate-300">
          姓名
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 h-12 w-full rounded-[8px] border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow/60"
            placeholder="请输入姓名"
          />
        </label>
        <label className="text-sm text-slate-300">
          电话
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="mt-2 h-12 w-full rounded-[8px] border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow/60"
            placeholder="13566802517"
            inputMode="tel"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm text-slate-300">
        公司名称
        <input
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="mt-2 h-12 w-full rounded-[8px] border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow/60"
          placeholder="请输入公司名称"
        />
      </label>
      <label className="mt-5 block text-sm text-slate-300">
        需求描述
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 min-h-36 w-full resize-y rounded-[8px] border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow/60"
          placeholder="请简单描述项目背景、目标或想接入的AI能力"
        />
      </label>
      {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
      {submitted && (
        <p className="mt-4 rounded-[8px] border border-cyanGlow/30 bg-cyanGlow/10 px-4 py-3 text-sm text-cyan-100">
          感谢，我们会尽快联系您。
        </p>
      )}
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        <Send className="h-4 w-4" />
        提交需求
      </Button>
    </form>
  );
}
