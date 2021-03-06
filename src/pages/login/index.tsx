import axios from "axios"
import { FormEvent, useState } from "react"
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { getSession, signIn, useSession } from 'next-auth/react'
import { GetServerSideProps } from "next"

export default function Login() {
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  return (
    <div className="flex h-screen items-center justify-center font-Roboto">
      <div className="min-h-full py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-13 w-auto" src="/image/atom.png" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">Hora de fazer seu login</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Não tem conta ainda ?
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">  vamos criar uma </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Email address</label>
                <input id="email-address" value={email} onChange={e => setEmail(e.target.value)} type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Endereço de e-mail" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-900"> Lembre de mim </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Esqueceu sua senha ? </a>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div className="flex justify-between">
            <button onClick={() => signIn('github')} className="flex relative group w-2/4 mr-2 realtive justify-center items-center py-2 text-gray-700 text-normal text-md rounded-md border border-1 border-gray-100 mt-3 bg-white-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 shadow-md hover:shadow transition ease-in">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FaGithub size={30} />
              </span>
              <p>GitHub</p>
            </button>
            <button className="flex relative group w-2/4 ml-2 realtive justify-center items-center py-2 text-gray-700 text-normal text-md rounded-md border border-1 border-gray-100 mt-3 bg-white-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 shadow-md hover:shadow transition ease-in">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FcGoogle size={30} />
              </span>
              <p>Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}