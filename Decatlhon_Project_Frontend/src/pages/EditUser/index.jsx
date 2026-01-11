import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { primeiraLetraMaiuscula } from "../../components/MyCard";
import { jwtDecode } from "jwt-decode"
import api from "../../services/api";
import MyInput from "../../components/MyInput";

export default function EditUser() {


    const { id } = useParams()
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaNova, setSenhaNova] = useState('')
    const [imagem, setImagem] = useState(null) // File
    const [imagemPreview, setImagemPreview] = useState(null)
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem("token")
    const userDecodedToken = jwtDecode(token)

    useEffect(() => {
        async function fetchUsuario() {
            const req = await axios.get(`http://localhost:3000/users/id/${id}`, {
                headers: {
                    "Authorization": token
                }
            });

            const usuario = req.data;
            setNome(usuario.nome);
            setEmail(usuario.email);
            setImagem(usuario.imagem);
            setRole(usuario.role);
        }

        fetchUsuario();
    }, []);



    async function editUsuario(e) {
        e.preventDefault()
        setLoading(true)

        let imageUrl = ""

        if (imagem) {
            const formData = new FormData()
            formData.append("image", imagem)

            const imgbbApiKey = "d345d40546abe58bf622c91ca3c57470"
            const uploadResponse = await axios.post(
                `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                formData
            )

            imageUrl = uploadResponse.data.data.display_url
        }

        const reqData = await axios.put(`http://localhost:3000/users/${id}`, {
            nome,
            email,
            imagem: imageUrl
        }, {
            headers: {
                Authorization: token
            }
        })

        const reqSenha = await axios.put(`http://localhost:3000/users/senha/${id}`, {
            senhaAntiga: senha,
            senhaNova: senhaNova
        }, {
            headers: {
                Authorization: token
            }
        })

        setLoading(false)
        
        if (reqSenha.data.error) {
            return toast.error(reqSenha.data.error)
        }

        toast.success("User Edited!");
        setTimeout(() => {
            navigate("/dashboard");
        }, 2000)

    }

    return (
        <>
            <Header />
            <ToastContainer />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mb-20 mt-10">
                <ToastContainer />
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQGNxHh-eJXjXA/company-logo_200_200/company-logo_200_200/0/1630650969070/apura_logo?e=2147483647&v=beta&t=3lfapnuET_Gn9tvEYHXPatFMELN9dpdKRZIPZbHwGWA"
                        className="mx-auto h-20 w-auto rounded"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Edit your Profile
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" className="space-y-6">

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
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <div className="mt-2">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        Current Password
                                    </label>
                                    <MyInput
                                        inputHandle={({ target }) => setSenha(target.value)}
                                        inputPlaceholder="ex: 123!@#"
                                        inputType="email"
                                        inputValue={senha}
                                        inputClass="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    ></MyInput>
                                    <br />
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        New Password
                                    </label>
                                    <MyInput
                                        inputHandle={({ target }) => setSenhaNova(target.value)}
                                        inputPlaceholder="ex: 123!@#"
                                        inputType="email"
                                        inputValue={senhaNova}
                                        inputClass="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    ></MyInput>
                                </div>
                                <div className="flex flex-col items-center gap-4 p-6">
                                    <div className="flex flex-col items-center gap-3">
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 px-6 py-4 text-sm text-gray-600 transition
                   hover:border-gray-900 hover:bg-gray-100 hover:text-blue-900"
                                        >
                                            📷 Select profile image
                                        </label>

                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden"
                                            onChange={({ target }) => {
                                                const file = target.files[0]
                                                if (!file) return

                                                setImagem(file)
                                                setImagemPreview(URL.createObjectURL(file))
                                            }}
                                        />

                                        {imagemPreview && (
                                            <img
                                                src={imagemPreview}
                                                alt="Preview"
                                                className="h-24 w-24 rounded-full object-cover shadow-md"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                disabled={loading}
                                onClick={editUsuario}
                                className={`flex w-full justify-center items-center gap-2 rounded-md
                                            bg-[#1C1C2B] px-3 py-2 text-sm font-semibold text-white shadow-xs
                                            transition hover:bg-gray-700 cursor-pointer
                                 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner"></span>
                                        Saving...
                                    </>
                                ) : (
                                    "Edit"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />

        </>
    )
}
