import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { primeiraLetraMaiuscula } from "../../components/MyCard";
import { jwtDecode } from "jwt-decode"

export default function UserLoggedDetail() {


    const { id } = useParams()
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [imagem, setImagem] = useState('')
    const [role, setRole] = useState('')
    const token = localStorage.getItem("token")

    const userDecodedToken = jwtDecode(token)

    useEffect(() => {
        async function fetchUsuario() {

            const req = await axios.get(`http://localhost:3000/users/id/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            })

            const usuario = req.data

            setNome(usuario.nome)
            setEmail(usuario.email)
            setSenha(usuario.senha)
            setImagem(usuario.imagem)
            setRole(usuario.role)
        }
        fetchUsuario()
    }, [])


    return (
        <>
            <Header />
            <ToastContainer />
            <section class="py-8 bg-white md:py-16 dark:bg-white antialiased">
                <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img class="w-full hidden dark:block" src={imagem} alt="Usuario" />
                        </div>

                        <div class="mt-6 sm:mt-8 lg:mt-0">
                            <h1
                                class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-black"
                            >
                                {primeiraLetraMaiuscula(role)}
                            </h1>
                            <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p
                                    class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-black"
                                >
                                    {nome}
                                </p>
                            </div>
                            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">

                                <a
                                    href="#"
                                    title=""
                                    class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    role="button"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    title=""
                                    class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 dark:bg-red-900 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    role="button"
                                >
                                    Delete
                                </a>

                                <a
                                    href="#"
                                    title=""
                                    class="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                                    role="button"
                                >
                                    <svg
                                        class="w-5 h-5 -ms-2 me-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                        />
                                    </svg>

                                    Add to cart
                                </a>
                            </div>

                            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p class="mb-6 text-gray-500 dark:text-gray-400">
                                {email}
                            </p>

                            <p class="text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
