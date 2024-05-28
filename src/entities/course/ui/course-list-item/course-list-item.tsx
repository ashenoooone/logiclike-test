import { cn } from "@/shared/utils";
import { CourseType } from "../../types";
import cls from "./course-list-item.module.scss";
type CourseListItemProps = {
  className?: string;
  item: CourseType;
};

export const CourseListItem = (props: CourseListItemProps) => {
  const { className, item } = props;
  return (
    <div className={cn(cls.course_list_item, className)}>
      <div
        className={cls.image_container}
        style={{
          backgroundColor: item.bgColor,
        }}
      >
        <img src={item.image} alt={item.name} className={cls.image} />
      </div>
      <p className={cls.name}>{item.name}</p>
    </div>
  );
};
