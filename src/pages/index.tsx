import { PrismaClient } from "@prisma/client"
import { GetServerSideProps } from "next"
import { prisma } from "../lib/prisma"

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-3 gap-3">
        
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany()

  return{
    props: {

    }
  }
}