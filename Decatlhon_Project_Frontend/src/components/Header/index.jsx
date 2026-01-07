export default function Header(header) {

    return (
        <>
            {header.header == "no" ?
                <header class="bg-blue-600">
                    <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="/login" class="text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </nav>
                </header> :
                <header class="bg-blue-600">
                    <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                        <div class="flex lg:flex-1">
                            <a href="#" class="-m-1.5 p-0.5">
                                <span class="sr-only">Your Company</span>
                                <img src="https://yt3.googleusercontent.com/oPpQE6ygF29Lz8wRZN9zTSmJq6lhmSbzLQtw1GvJvOKihcqo68o6JjTnZDzujjMAOC5xPd5j9EU=s900-c-k-c0x00ffffff-no-rj" alt="" class="h-10 w-auto rounded" />
                            </a>
                        </div>

                        <el-popover-group class="hidden lg:flex lg:gap-x-12">
                            <a href="/" class="text-sm/6 font-semibold text-white">Home</a>
                            <a href="/dashboard" class="text-sm/6 font-semibold text-white">Dashboard</a>
                        </el-popover-group>
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="/login" class="text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </nav>
                </header>
            }


        </>
    )
}