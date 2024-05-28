import { cn } from "@/shared/utils";
import { ReactNode } from "react";
import cls from "./page.module.scss";

type PageProps = {
  className?: string;
  children?: ReactNode;
};

export const Page = (props: PageProps) => {
  const { className, children } = props;
  return <div className={cn(cls.page, className)}>{children}</div>;
};
