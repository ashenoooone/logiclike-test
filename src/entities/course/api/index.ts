import { $api } from "@/shared/api/instance";
import { CourseType } from "../types";

export class CourseApi {
  private constructor() {}

  public static getCourses = () => $api.get<CourseType[]>("/courses.json");

  public instance = new CourseApi();
}
