import Link from "next/link";
import NavBarStyles from "../styles/NavBar.module.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function NavBar() {
  const { user, isLoading } = useUser()
  return (
    <>
      <nav>
        <ul className={NavBarStyles.container}>
          <li><Link href="/"><h2>NCT - The Course</h2></Link></li>
          <li><Link href="/about"> About </Link> </li>
          <li> <Link href="/courses"> Courses</Link> </li>
          {!isLoading && !user && (
            <li><LoginButton /> </li>
          )}
          {user && (
            <>
              <li><Link href="/profile"> Profile </Link></li>
              <LogoutButton />
            </>
          )}
        </ul>
      </nav>
    </>
  )
  }

