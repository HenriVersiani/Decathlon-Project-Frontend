import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer";

export default function Register() {
    return (
        <>
            <Header />
            <ToastContainer />

            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:text-center">
                        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">User Data Manipulation App</p>
                        <p class="mt-6 text-lg/8 text-gray-700">Essa é uma aplicação desenvolvida para o gerenciamento de usuários em um sistema, com verificações de Tokens, Middlewares, CRUD completo de Usuários, Admins / Users e mais.</p>
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-gray-900">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#17172B]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                                            <path d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    Desenvolvedor:
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-600">Henrique Versiani</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-gray-900">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#17172B]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                                            <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    Sobre:
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-600 ">Desenvolvido de maneira FullStack, ultilizando estruturas modernas de organização de código, garantindo uma boa leitura.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-gray-900">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#17172B]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                                            <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    GitHub:
                                </dt>
                                <a class="mt-2 text-base/7 text-gray-600" href="https://github.com/HenriVersiani" target="_blank">https://github.com/HenriVersiani</a>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-gray-900">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#17172B]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                                            <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    LinkedIn:
                                </dt>
                                <a class="mt-2 text-base/7 text-gray-600" href="https://www.linkedin.com/in/henrique-versiani/" target="_blank">https://www.linkedin.com/in/henrique-versiani/</a>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}
