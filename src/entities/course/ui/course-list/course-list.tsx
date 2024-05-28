import { cn } from "@/shared/utils";
import { CourseType } from "../../types";
import { CourseListItem } from "../course-list-item/course-list-item";
import cls from "./course-list.module.scss";
type CourseListProps = {
  className?: string;
  items: CourseType[] | null;
};

export const CourseList = (props: CourseListProps) => {
  const { className, items } = props;
  return (
    <div className={cn(cls.list, className)}>
      {items && items.length > 0
        ? items.map((item) => {
            return <CourseListItem key={item.id} item={item} />;
          })
        : null}
    </div>
  );
};
