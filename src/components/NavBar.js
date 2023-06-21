import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <h1>NCT - The Course</h1>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about"> About </Link> </li>
          <li> <Link href="/courses"> Courses</Link> </li>
          <li> Requests </li>
        </ul>
    </>
  )
  }