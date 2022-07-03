import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {useEffect} from "react";



const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/news')
  });


  return (
    <div className="page">

      <h1>INDEX PAGE</h1>
      <br/>
        <Link href="/register">TO Register</Link>
        <Link href="/news">TO News</Link>
        <Link href="/courses">TO courses</Link>
    </div>
  )
}

export default Home
