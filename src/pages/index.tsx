import type { NextPage } from 'next'
import Link from 'next/link'



const Home: NextPage = () => {
  return (
    <div className="page">
      <h1>INDEX PAGE</h1>
      <br/>
      <Link href="/register">TO Register</Link>
    </div>
  )
}

export default Home
