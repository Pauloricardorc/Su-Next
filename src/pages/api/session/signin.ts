import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body
  
  try {
    await prisma.user.findUnique({
      where: {
        email
      }
    }).then(result => {
      if (result?.email) {
        return res.status(200).send('Sucess')
      }
      return res.status(401).send('Not Authorized')
    })
  } catch (error) {
    throw('Erro no servidor email incorreto')
  }
}