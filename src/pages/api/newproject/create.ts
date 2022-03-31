import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {title, description, image, autor} = req.body
  await prisma.project.create({
    data: {
      title,
      description,
      autor,
      image
    }
  })

  return res.status(200).send('Cadastrado com sucesso')
}