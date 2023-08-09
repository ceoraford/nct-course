import NavBar from "@/components/NavBar";
import { getAllCourses } from "@/utils/mdx";
import dayjs from "dayjs";

export default function CoursesPage({ courses }) {
  return (
    <>
      <NavBar />
      <h1> Courses </h1>
      <div>
        {courses?.map((frontMatter) => {
          return (
              <Link href={`/courses/${frontMatter.slug}`} passHref>
                <div>
                  <h2 className="title">{frontMatter.title}</h2>
                  <p className="summary">{frontMatter.excerpt}</p>
                  <p className="date">
                    {dayjs(frontMatter.publishedAt).format("MMMM D, YYYY")} &mdash;{""}
                    {frontMatter.readingTime}
                  </p>
                </div>
              </Link>
          )
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const courses = await getAllCourses();

  courses.map((course) => course.data).sort(
    (a,b) => {
      if (a.publishedAt > b.publishedAt){
        return 1;
      } else if (a.publishedAt < b.publishedAt) {
        return -1;
      } else {
        return 0;
      }
  })

  return {
    props: {
      posts: courses.reverse()
    }
  }
}