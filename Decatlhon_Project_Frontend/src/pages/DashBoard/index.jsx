import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MyCard from "../../components/MyCard";
import { api } from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

export default function Dashboard() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

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

        } catch(error){
                toast.error(error.response.data.error)
                setTimeout(() => {
                navigate("/login");
            }, 3000)
        }
    }

    useEffect(() => {
        listarUsuarios()
    }, [])

    return (
        <>
            <Header />
            <ToastContainer/>

            <br />

            <ul role="list" class="divide-y divide-white/5 justify-center items-center grid ">
                {users.map(user => (
                    <MyCard cardParams={user} />
                ))}
                <br />
            </ul>
        </>
    )
}