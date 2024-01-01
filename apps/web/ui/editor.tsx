"use client";

import React, { useState } from "react";
import { Editor as NovelEditor } from "@liuanboy/novel";
import { useTranslation } from "react-i18next";
import '../lib/i18n';
import i18n from "../lib/i18n";

export default function Editor() {
  const [saveStatus, setSaveStatus] = useState("Saved");
  const [lang, setLang] = useState("en");
  const { t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    setLang(e.target.value);
  };

  return (
    <div className="relative w-full max-w-screen-lg ">
      <div className="flex w-full flex-row justify-between justify-items-center">
        <select onChange={onChangeLang}>
          <option value="zh">zh</option>
          <option value="en">en</option>
        </select>
        <div>{t("Hello")}</div>
        <div className="right-5 top-5 z-10 mb-5 rounded-lg bg-stone-100 px-2 py-1 text-sm text-stone-400">
          {saveStatus}
        </div>
      </div>
      <NovelEditor
        onUpdate={() => {
          setSaveStatus("Unsaved");
        }}
        onDebouncedUpdate={() => {
          setSaveStatus("Saving...");
          // Simulate a delay in saving.
          setTimeout(() => {
            setSaveStatus("Saved");
          }, 500);
        }}
        lang={lang}
      />
    </div>
  );
}
