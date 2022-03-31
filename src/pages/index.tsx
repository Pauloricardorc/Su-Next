import { Project } from "@prisma/client"
import { GetServerSideProps } from "next"
import { getSession, useSession } from "next-auth/react"
import Link from "next/link"
import { prisma } from "../lib/prisma"

type CPosts = {
  id: String,
  title: String,
  description: String,
  autor: String,
  image: String,
  date: Date
}

interface IPosts {
  posts: Project[]
}

export default function Home({posts}: IPosts) {
  const session = useSession()
  console.log(session.data)
  return (
    <div className='font-Roboto'>
      <div className="flex mx-auto">
        <div className="flex flex-col xl:flex-row md:justify-between p-5 md:py-44 h-full items-center ">
          <div className="xl:w-2/5 font-medium sm:w-full px-4">
            <p className="text-5xl text-gray-600">Encontre aqui a forma certa de se organizar de maneira facíl.</p>
            <p className="text-2/3 text-gray-500 text-justify py-6 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="w-2/2 py-20 md:py-0 md:w-2/2">
            <img src="https://blog.planview.com/wp-content/uploads/2019/05/Areas-of-Improvement-for-Scaling-Agile-Across-an-Organization.jpg" alt="" className="rounded-full" />
          </div>
        </div>
      </div>
      <p className="text-3xl font-medium text-gray-700 p-5">Serviços disponiveis</p>
      
      <div className="flex flex-col md:flex-row">
        {posts.map(post => (
          <div key={post.id} className="flex-col w-4/12 p-20">
            <Link href={'/login'} passHref>
              <div className="flex flex-col justify-between shadow-xl h-128 pb-12 bg-white rounded-md overflow-hidden text-gray-500 hover:cursor-pointer">
                <img src={post.image} alt="" className="bg-cover w-full h-48" />
                <p className="flex items-center w-full justify-center py-2 text-xl mx-auto truncate py-4">{post.title}</p>
                <p className="px-2 py-3 text-ellipsis">{post.description}</p>
                <span className="flex justify-end mr-4 font-bold text-gray-400">Publicação - {post.createdAt}</span>
              </div>
            </Link>
          </div>
        ))}
        {!session.data ? 
          <div className="flex-col w-4/12 p-20">
          <Link href={'/login'} passHref>
            <div className="flex flex-col shadow-xl h-128 pb-2 bg-white rounded-md overflow-hidden text-gray-500 hover:cursor-pointer">
              <img src='https://mundoconectado.com.br/uploads/chamadas/microsoft-auth.png' alt="" className="bg-cover h-48" />
              <p className="flex items-center w-full justify-center py-2 text-xl mx-auto truncate py-4">Quer ver mais ?</p>
              <div className="flex justify-start h-full">
                <p className="px-2 py-3">Quer ver mais serviços disponível na empresa ATOMIC faça seu login</p>
              </div>
              <span className="flex justify-end mr-4 font-bold text-gray-400"></span>
            </div>
          </Link>
        </div>
        : ''}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const posts = await prisma.project.findMany()

  const data = posts.map(post => {
    return{
      id: post.id,
      title: post.title,
      description: post.description,
      autor: post.autor,
      image: post.image,
      createdAt: post.createdAt.toLocaleDateString()
    }
  })

  return {
    props: {
      posts: data
    }
  }
}