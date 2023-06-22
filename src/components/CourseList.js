import Course from "./Course";
import CourseListStyles from "../styles/CourseList.module.css";

export default function CourseList() {
  return (
    <>
      <h2 className={CourseListStyles.featured}> Featured Courses</h2>
      <div className={CourseListStyles.container}>
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </>
  )
}