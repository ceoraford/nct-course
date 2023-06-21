import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/api/auth/login"> 
      <button> Login</button>
    </Link>
  )
}