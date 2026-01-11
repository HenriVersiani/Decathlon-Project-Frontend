import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast, ToastContainer } from "react-toastify"


export default function Header(header) {
    
    const [imagem, setImagem] = useState("")
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    async function userAlreadyLogged(token) {



        if (token) {
            return navigate("/dashboard")
        } else {
            toast.error("Faça seu login!", {
                autoClose: 2000,
                onClose: () => {
                    navigate("/login")
                }
            })
        }
    }

    useEffect(() => {
        async function fetchUsuario() {
            const req = await axios.get(`http://localhost:3000/users/id/${userDecodedToken.sub}`, {
                headers: {
                    "Authorization": token
                }
            });

            const usuario = req.data;
            setImagem(usuario.imagem);
        }

                console.log(imagem)

        fetchUsuario();
    }, []);

    let userDecodedToken = {}

    if (token) {
        userDecodedToken = jwtDecode(token);
    }


    return (
        <>
            <ToastContainer />
            {header.header == "no" ?
                <header class="bg-[#17172B]">
                    <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                        <div class="hidden lg:flex lg:flex-1 lg:justify-start">
                            <a href="/register" class="text-sm/6 font-semibold text-white cursor-pointer">Register <span aria-hidden="true">&rarr;</span></a>
                        </div>
                        <div class="hidden lg:flex lg:flex-1 justify-end">
                            <button href="/login" class="text-sm/6 font-semibold text-white cursor-pointer" onClick={() => userAlreadyLogged(token)}>Log in <span aria-hidden="true">&rarr;</span></button>
                        </div>
                    </nav>
                </header> :
                <header class="bg-[#17172B]">
                    <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">


                        <el-popover-group class="hidden lg:flex lg:gap-x-12">
                            <a href="/" class="text-sm/6 font-semibold text-white">Home</a>
                            <a href="/dashboard" class="text-sm/6 font-semibold text-white">Dashboard</a>
                            <a href="/register" class="text-sm/6 font-semibold text-white">Register  <span aria-hidden="true">&rarr;</span></a>
                        </el-popover-group>
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="/login" class="text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                        </div>
                        <a href={`/userLoggedDetail/id/${userDecodedToken.sub}`}><img class="w-10 h-10 rounded-full ml-5 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" src={imagem} alt="Rounded avatar"></img></a>
                    </nav>
                </header>
            }


        </>
    )
}