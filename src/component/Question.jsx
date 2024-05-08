import question from "../assets/images/question.png"

const Question = () => {
    return (
        <div className="flex h-screen">
            <div className="hidden gap-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:block w-1/2 bg-[#8B55E5]">
                <img src={question} className="w-96" alt="Credit: Trivia Game Community" />
                <div className="flex text-3xl flex-col gap-4">
                    <h1 className="w-full text-white">Attempt Count</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center bg-[#F5F5F5] items-center w-full lg:w-1/2">
               <div className="flex flex-col w-[70%]">
                    <div className="flex gap-4 bg-[#FFC75D] px-2 py-2 rounded-lg items-center justify-between text-center font-bold lg:text-left">
                        <div className="flex gap-4 items-center">
                            <img className="w-12 rounded-full" src={question} alt="Credit: Trivia Game Community" />
                            <p className="mr-8">Sunday P. Afolabi</p>
                        </div>
                        <p className="text-right border border-cyan-500">Score count</p>
                    </div>
                    <div className="flex flex-col gap-4 py-16 text-center lg:text-left">
                        <p className="py-2 px-4 bg-[#FFC75D] rounded-lg">Who created the digital distribution platform Steam?</p>
                        <div className="flex flex-col gap-2">
                            <p className="py-2 px-4 bg-[#FFC75D] rounded-lg cursor-pointer hover:bg-[#FFC75D45]">Pixeltail Games</p>
                            <p className="py-2 px-4 bg-[#FFC75D] rounded-lg cursor-pointer hover:bg-[#FFC75D45]">Valve</p>
                            <p className="py-2 px-4 bg-[#FFC75D] rounded-lg cursor-pointer hover:bg-[#FFC75D45]">Ubisoft</p>
                            <p className="py-2 px-4 bg-[#FFC75D] rounded-lg cursor-pointer hover:bg-[#FFC75D45]">Electronic Arts</p>
                        </div>
                        <div className="w-full h-2 bg-[#FFC75D] rounded-lg">
                            <div className="w-1/5 h-2 bg-[#8B55E5] rounded-lg"></div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Question;