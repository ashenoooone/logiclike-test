import { cn } from "@/shared/utils";
import React from "react";
import cls from "./theme-bar.module.scss";
import { ThemeBarItem } from "../theme-bar-item/theme-bar-item";

type ThemeBarProps = {
  className?: string;
  themes: string[];
  selectedTheme?: string;
  onChangeTheme: (theme: string) => void;
};

export const ThemeBar = React.memo((props: ThemeBarProps) => {
  const { className, themes, onChangeTheme, selectedTheme } = props;

  const onAllThemesClick = () => {
    onChangeTheme("");
  };

  return (
    <div className={cn(cls.theme_bar, className)}>
      <ThemeBarItem
        isSelected={selectedTheme === ""}
        onClick={onAllThemesClick}
        text="Все темы"
      />
      {themes?.map((theme) => {
        return (
          <ThemeBarItem
            key={theme}
            isSelected={selectedTheme === theme}
            text={theme}
            onClick={onChangeTheme}
          />
        );
      })}
    </div>
  );
});

ThemeBar.displayName = "ThemeBar";
