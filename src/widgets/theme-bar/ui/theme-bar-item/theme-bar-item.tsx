import { cn } from "@/shared/utils";
import React from "react";
import cls from "./theme-bar-item.module.scss";

type ThemeBarItemProps = {
  className?: string;
  text: string;
  onClick: (theme: string) => void;
  isSelected?: boolean;
};

export const ThemeBarItem = React.memo((props: ThemeBarItemProps) => {
  const { className, isSelected, onClick, text } = props;

  const onClickHandler = () => {
    onClick(text!);
  };

  return (
    <button
      onClick={onClickHandler}
      className={cn(cls.theme_bar_item, className, {
        [cls.selected]: isSelected,
      })}
    >
      {text}
    </button>
  );
});

ThemeBarItem.displayName = "ThemeBarItem";
