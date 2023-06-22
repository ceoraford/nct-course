import Image from "next/image";
import CourseStyles from "../styles/Course.module.css";

export default function Course() {
  return (
    <div className={CourseStyles.container}>
      <ul> 
        <li> 
          <Image 
            src="/nct-127.jpg"
            width={260}
            height={210}
            alt="Picture of Kpop group NCT 127"
          />
        </li>
        <li className={CourseStyles.course__info}>Course name: NCT 127</li>
        <li className={CourseStyles.course__info}>Duration:1 HR</li>
        <li className={CourseStyles.course__info}>Summary</li>
      </ul>
    </div> 
  )
}