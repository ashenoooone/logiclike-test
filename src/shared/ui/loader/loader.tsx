import { cn } from "@/shared/utils";
import cls from "./loader.module.scss";

type LoaderProps = {
  className?: string;
};

export const Loader = (props: LoaderProps) => {
  const { className } = props;
  return <span className={cn(className, cls.loader)}></span>;
};
