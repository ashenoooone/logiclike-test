import { CourseApi, CourseList } from "@/entities/course";
import { useRequest } from "@/shared/api/hooks";
import { Loader } from "@/shared/ui/loader/loader";
import { Page } from "@/shared/ui/page/page";
import { ThemeBar } from "@/widgets/theme-bar";
import { useEffect, useMemo, useState } from "react";
import cls from "./main-page.module.scss";
import { CourseType } from "@/entities/course/types";

function MainPage() {
  const [theme, setTheme] = useState("");
  const { data, error, loading } = useRequest(CourseApi.getCourses);

  const themes = useMemo(() => {
    if (data) {
      return data.reduce((ac, item) => {
        ac.push(...item.tags.filter((tag) => !ac.includes(tag)));
        return ac;
      }, [] as string[]);
    }
    return [];
  }, [data]);

  const courses = useMemo<CourseType[] | null>(() => {
    if (theme === "") {
      return data;
    }
    return data?.filter((course) => course.tags.includes(theme)) ?? [];
  }, [data, theme]);

  useEffect(() => {}, []);

  const onChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return error;
  }

  return (
    <Page className={cls.main_page}>
      <ThemeBar
        selectedTheme={theme}
        onChangeTheme={onChangeTheme}
        themes={themes}
      />
      <CourseList items={courses} />
    </Page>
  );
}

export default MainPage;
