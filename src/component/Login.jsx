import login from "../assets/images/login.png"

const Login = () => {
    return (
        <div className="flex h-screen">
            <div className="hidden gap-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:block w-1/2 bg-[#8B55E5]">
                <img src={login} className="w-96" alt="Credit: Trivia Game" />
                <div className="w-1/2 flex flex-col gap-4">
                    <p className="w-full text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="https://github.com/Lecon-a" className="bg-[#FFC75D] px-2 py-2 rounded-lg text-center w-fit cursor-pointer">Project Repo Github</a>
                </div>
            </div>
            <div className="flex flex-col justify-center bg-[#F5F5F5] items-center w-full lg:w-1/2">
               <div className="flex flex-col gap-4">
                    <div className="text-xl text-center font-bold lg:text-left">
                        <span className="text-green-600 mr-2">&#9650;</span>
                        <span>SPa Trivia React Redux App</span>
                    </div>
                    <div className="text-3xl text-center font-bold lg:text-left">
                        <h2>Hello, </h2>
                        <h2>Welcome Back</h2>
                    </div>
                    <form className="flex flex-col gap-4 text-center font-bold">
                        <input className="px-4 py-2 rounded-full" type="text" placeholder="Name" />
                        <input className="px-4 py-2 rounded-full" type="password" placeholder="Password" />
                        <button className="">Login</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default Login;