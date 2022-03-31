import Link from "next/link"
import { signOut, useSession } from 'next-auth/react'
let img = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'


export default function Header() {
    const { data: session } = useSession()

    // if(session?.user) {
    //     alert('Conectado')
    // }
    return (
        <div className="shadow-sm bg-white-500 py-2">
            <div className='container mx-auto p-1 flex items-center justify-between'>
                <div className="flex items-center">
                    <img src="/image/atom.png" alt="Logo do site com animais se divertindo" className='w-23 h-16 rounded-md' />
                    <p className="px-4 font-bold text-xl text-blue-500 font-Righteous">ATOMIC</p>
                </div>
                <div className="text-gray-800 p-2 cursor-pointer transition ease-in-out px-4 text-righteous text-2/2 font-medium font-Roboto">
                    <Link href="/">
                        <a className="hover:text-gray-300 transition ease-in-out p-3">Inicio</a>
                    </Link>
                    {/* <a className="hover:text-gray-300 transition ease-in-out p-3">Conteúdo</a> */}
                    {!session?.user ? 
                    <Link href="/login">
                        <a className="hover:text-gray-300 transition ease-in-out p-3">Entrar</a>
                    </Link>
                    :
                    <>
                        <Link href="/novoprojeto">
                            <a className="hover:text-gray-300 transition ease-in-out p-3">Novo Projeto</a>
                        </Link>
                        <Link href="/" passHref>
                            <a onClick={() => signOut()} className="hover:text-gray-300 transition ease-in-out p-3">Sair</a>
                        </Link>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}