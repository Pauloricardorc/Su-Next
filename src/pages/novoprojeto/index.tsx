export default function Projeto() {
  return (
    <div className="container mx-auto px-32 p-24">
      <p className="text-3xl font-medium text-gray-700 ml-32">Novo Projeto</p>
      <div className="flex justify-content w-full">
        <form className="py-10 w-full justify-center items-center flex flex-col">
          <div className="flex">
            <label htmlFor="email" className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input type="email" name="email" placeholder="you@gmail.com" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1" />
            </label>
            <label htmlFor="nome" className="block ml-10">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Nome
              </span>
              <input type="text" name="nome" placeholder="digite seu nome completo" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1" />
            </label>
          </div>
          <div className="flex py-12">
            <label htmlFor="image" className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                image
              </span>
              <input type="file" name="image" placeholder="coloque uma imagem" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1" />
            </label>
            <label htmlFor="descricao" className="block ml-10">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Descrição
              </span>
              <textarea name="descricao" placeholder="informe um comentario" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1" />
            </label>
          </div>
          <div className="flex">
            <button className="w-22 bg-blue-500 text-white px-20 py-2 rounded-md hover:bg-blue-400 active:bg-blue-600 transition ease-in border border-1 border-blue-100">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}