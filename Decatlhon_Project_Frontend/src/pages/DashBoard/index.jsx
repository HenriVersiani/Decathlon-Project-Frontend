import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MyCard from "../../components/MyCard";
import api from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer";
import MyInput from "../../components/MyInput";

export default function Dashboard() {

    const [users, setUsers] = useState([])
    const [nome, setNome] = useState("")
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    async function buscarUsuarioPorNome(nomeBuscado) {
        if (!nomeBuscado) {
            listarUsuarios()
            return
        }

        try {
            const usuario = await api.get(`/users/nome/${nomeBuscado}`, {
                headers: {
                    Authorization: token
                }
            })

            if (usuario.data.error) {
                setUsers([])
                return
            }

            setUsers(usuario.data)

        } catch (error) {
            console.error(error)
        }
    }

    async function listarUsuarios() {
        const token = localStorage.getItem("token")
        try {
            const usuariosApi = await api.get("/users", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            })

            setUsers(usuariosApi.data)

        } catch (error) {
            toast.error(error.response.data.error)
            setTimeout(() => {
                navigate("/login");
            }, 3000)
        }
    }

    useEffect(() => {
        listarUsuarios()
    }, [])

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            buscarUsuarioPorNome(nome)
        }, 400)

        return () => clearTimeout(delayDebounce)
    }, [nome])

    return (
        <>
            <Header />
            <ToastContainer />

            <br />

            <div className="items-center flex justify-center">
                <div class="w-full max-w-sm min-w-[200px]">
                    <div class="relative flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>

                        <MyInput
                            inputHandle={({ target }) => setNome(target.value)}
                            inputPlaceholder="Search for a Username"
                            inputType="text"
                            inputValue={nome}
                            inputClass="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        ></MyInput>
                    </div>
                </div>
            </div>

            <br />

            <ul role="list" class="divide-y divide-white/5 justify-center items-center grid ">
                {users.map(user => (
                    <MyCard cardParams={user} />
                ))}
                <br />
            </ul>

            <Footer />

        </>
    )
}