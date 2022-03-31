import axios from "axios"
import { useState } from "react"

export default function Projeto() {
  const [title, setTitle] = useState('')
  const [autor, setAutor] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  
  async function CreateNewProjetct() {
    await axios({
      method: 'POST',
      baseURL: 'http://localhost:3000/api/newproject/create',
      data: {
        title, 
        autor, 
        image, 
        description
      }
    }).then((e) => console.log(e.data))
  }

  return (
    <div className="container mx-auto px-32 p-24">
      <p className="text-3xl font-medium text-gray-700 ml-32">Novo Projeto</p>
      <div className="flex justify-content w-full">
        <form className="py-10 w-full justify-center items-center flex flex-col" onSubmit={CreateNewProjetct}>
          <div className="flex">
            <label htmlFor="title" className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Titulo  
              </span>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="titulo do post" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1" />
            </label>
            <label htmlFor="nome" className="block ml-10">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Nome
              </span>
              <input value={autor} onChange={(e) => setAutor(e.target.value)} type="text" name="nome" placeholder="digite seu nome completo" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1" />
            </label>
          </div>
          <div className="flex py-12">
            <label htmlFor="image" className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                image
              </span>
              <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="coloque a url da sua imagem" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1" />
            </label>
            <label htmlFor="descricao" className="block ml-10">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Descrição
              </span>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="descricao" placeholder="informe um comentario" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1" />
            </label>
          </div>
          <div className="flex">
            <button className="w-22 bg-blue-500 text-white px-20 py-2 rounded-md hover:bg-blue-400 active:bg-blue-600 transition ease-in border border-1 border-blue-100">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}