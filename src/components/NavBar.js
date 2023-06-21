import Link from "next/link";
import NavBarStyles from "../styles/NavBar.module.css";
import LoginButton from "./LoginButton";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className={NavBarStyles.container}>
          <li><Link href="/"><h1>NCT - The Course</h1></Link></li>
          <li><Link href="/about"> About </Link> </li>
          <li> <Link href="/courses"> Courses</Link> </li>
          <li><Link href="/requests">Requests</Link></li>
          <li>
            <LoginButton></LoginButton>
          </li>
        </ul>
      </nav>
    </>
  )
  }

