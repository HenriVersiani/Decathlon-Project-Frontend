import Header from "../../components/Header";

export default function Dashboard() {
    return (
        <>
            <Header/>

            <br />

            <ul role="list" class="divide-y divide-white/5 justify-center items-center grid ">
                <li class="flex justify-around gap-x-6 py-5 bg-sky-800 w-300 rounded">
                    <div class="flex min-w-0 gap-x-4 ">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-12 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-white ">Tom Cook</p>
                            <p class="mt-1 truncate text-xs/5 text-gray-400">tom.cook@example.com</p>
                        </div>
                    </div>
                    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm/6 text-white">Director of Product</p>
                        <div class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-emerald-500/30 p-1">
                                <div class="size-1.5 rounded-full bg-emerald-500"></div>
                            </div>
                            <p class="text-xs/5 text-gray-400">Online</p>
                        </div>
                    </div>
                </li>
                <br />
                   <li class="flex justify-around gap-x-6 py-5 bg-sky-800 w-300 rounded ">
                    <div class="flex min-w-0 gap-x-4">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-12 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm/6 font-semibold text-white">Tom Cook</p>
                            <p class="mt-1 truncate text-xs/5 text-gray-400">tom.cook@example.com</p>
                        </div>
                    </div>
                    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm/6 text-white">Director of Product</p>
                        <div class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-emerald-500/30 p-1">
                                <div class="size-1.5 rounded-full bg-emerald-500"></div>
                            </div>
                            <p class="text-xs/5 text-gray-400">Online</p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}