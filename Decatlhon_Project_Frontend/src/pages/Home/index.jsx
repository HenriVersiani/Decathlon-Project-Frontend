import { useState } from "react";
import MyInput from "../../components/MyInput";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";
import Header from "../../components/Header";

export default function Home() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    async function createUser() {
        const req = await axios.post("http://localhost:3000/users", {
            "nome": nome,
            "email": email,
            "senha": password,
            "imagem": "https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg?semt=ais_hybrid&w=740&q=80",
        })

        const res = await req.data

        console.log(res)

        if (res.token) {
            toast.success("Success!")
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000)
        } else {
            toast.error(res.error)
        }

    }

    return (
        <>
        <Header header="no"/>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <ToastContainer />
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://yt3.googleusercontent.com/oPpQE6ygF29Lz8wRZN9zTSmJq6lhmSbzLQtw1GvJvOKihcqo68o6JjTnZDzujjMAOC5xPd5j9EU=s900-c-k-c0x00ffffff-no-rj"
                        className="mx-auto h-20 w-auto rounded"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action={createUser} method="POST" className="space-y-6">

                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <MyInput
                                    inputHandle={({ target }) => setNome(target.value)}
                                    inputPlaceholder="ex: Henrique"
                                    inputType="name"
                                    inputValue={nome}
                                    inputClass="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                ></MyInput>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <MyInput
                                    inputHandle={({ target }) => setEmail(target.value)}
                                    inputPlaceholder="ex: xxx@gmail.com"
                                    inputType="email"
                                    inputValue={email}
                                    inputClass="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                ></MyInput>
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Login
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <MyInput
                                    inputHandle={({ target }) => setPassword(target.value)}
                                    inputPlaceholder="ex: 123!@#"
                                    inputType="password"
                                    inputValue={password}
                                    inputClass="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                ></MyInput>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}