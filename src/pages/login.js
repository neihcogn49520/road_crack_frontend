import Head from 'next/head'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'
import Home from 'pages'

export default function Login() {
  return <>
  <Head>
      <title>Login</title>
      <link rel="icon" href="/roadicon.ico" />
  </Head>
  <LoginForm />
  </>
}
