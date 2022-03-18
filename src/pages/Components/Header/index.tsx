import Link from "next/link"

let img = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'


export default function Header() {
    return (
        <div className="bg-indigo-500 from-indigo-500 py-2">
            <div className='container mx-auto p-1 flex items-center justify-between'>
                <div>
                    <img src={img} alt="Logo do site com animais se divertindo" className='w-36 h-12 rounded-md' />
                </div>
                <div className="font-sans text-white p-2 cursor-pointer transition ease-in-out px-4">
                    <Link href="/">
                        <a className="hover:text-gray-300 transition ease-in-out p-3">Inicio</a>
                    </Link>
                    <a className="hover:text-gray-300 transition ease-in-out p-3">Conteúdo</a>
                    <Link href="/login">
                        <a className="hover:text-gray-300 transition ease-in-out p-3">Login</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}