import { PrismaClient } from "@prisma/client"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { prisma } from "../lib/prisma"

export default function Home() {
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
        <Link href={'/login'} passHref>
          <div className="flex-col basis-2/5 p-10 hover:cursor-pointer">
            <div className="flex flex-col shadow-md bg-white rounded-md overflow-hidden text-gray-500">
              <img src="https://cdn-images-1.medium.com/fit/t/1600/480/0*Bxu63mu1q7xHwjVP.jpg" alt="" className="bg-cover h-48" />
              <p className="flex items-center w-full justify-center py-2 text-xl">Serviço de integração</p>
              <div className="flex justify-center items-center h-full">
                <p className="px-2 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex-col basis-2/5 p-10 hover:cursor-pointer">
          <div className="flex flex-col shadow-md bg-white rounded-md overflow-hidden text-gray-500">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--r3MNAUcd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/4n8533fzovhyk6jceygu.png" alt="" className="bg-cover h-48" />
            <p className="flex items-center w-full justify-center py-2 text-xl">Serviço de integração</p>
            <div className="flex justify-center items-center h-full">
              <p className="px-2 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div className="flex-col basis-2/5 p-10 hover:cursor-pointer">
          <div className="flex flex-col shadow-md bg-white rounded-md overflow-hidden text-gray-500">
            <img src="https://miro.medium.com/max/1200/1*BYxrwtYExQzRODXLLlN-DA.jpeg" alt="" className="bg-cover h-48" />
            <p className="flex items-center w-full justify-center py-2 text-xl">Serviço de integração</p>
            <div className="flex justify-center items-center h-full">
              <p className="px-2 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: {

    }
  }
}