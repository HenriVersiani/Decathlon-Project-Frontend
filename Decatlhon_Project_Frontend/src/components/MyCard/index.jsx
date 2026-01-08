import { useEffect } from "react"

export default function MyCard({ cardParams }) {
    const { _id, nome, email, imagem, role } = cardParams

    function primeiraLetraMaiuscula(role) {
        return role.charAt(0).toUpperCase() + role.slice(1)
    }

    return (
        <li class="flex justify-around gap-x-6 py-5 bg-gray-200 w-300 rounded mb-5">
            <div class="flex min-w-0 gap-x-4 ">
                <img src={imagem} alt="" class="size-15 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
                <div class="min-w-0 flex-auto">
                    <p class="text-sm/6 font-semibold text-black ">{nome}</p>
                    <p class="mt-1 truncate text-xs/5 text-gray-800">{email}</p>
                </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p class="text-sm/6 text-black">{primeiraLetraMaiuscula(role)}</p>
                <div class="mt-1 flex items-center gap-x-1.5">
                    <div class="flex-none rounded-full bg-emerald-500/30 p-1">
                        <div class="size-1.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <p class="text-xs/5 text-gray-400">Active</p> {/* nova chave possivel de atividade.*/}
                </div>  
            </div>
             <a  href={`user/id/:${_id}`} class="bg-[#17172B] hover:bg-gray-700 cursor-pointer text-gray-200 flex items-center font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                    View
            </a>
        </li>
    )
}
