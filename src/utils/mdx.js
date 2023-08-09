import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";

const coursesPath = path.join(process.cwd(), './src/data/courses');

export async function getSlug() {
  const paths = sync(`${coursesPath}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length-1];
    const [slug, _extension] = fileName.split('.');

    return slug;
  });
}

export async function getCourseFromSlug(slug) {
  const courseDir = path.join(coursesPath, `${slug}.mdx`);
  const source = fs.readFileSync(courseDir);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source).text,
      ...data,
    }
  }
}

export async function getAllCourses() {
  const courses = fs.readdirSync(path.join(process.cwd(), './src/data/courses'));
  return courses.reduce((allCourses, courseSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "./src/data/courses", courseSlug),
      "utf-8" 
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: courseSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allCourses,
    ]
  }, []);
}
