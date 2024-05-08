const Subscribe = () => {
    return (
         /**
     * This following css rules position content at the center of the container element.
     * flex min-h-screen items-center justify-center
     */
        <div className="w-fll flex flex-wrap gap-10 justify-center items-center min-h-screen bg-blue-600">
            <div className="w-72 h-auto my-4 text-gray-400 rounded-lg bg-cover bg-white px-8 py-4">
                <h3 className="text-lg text-blue-600 font-bold">Start-up</h3>
                <h3 className="text-lg text-blue-600 font-bold">Free Forever</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dolor natus enim id deserunt, aut, corporis distinctio libero corrupti animi iusto quisquam, repudiandae molestiae commodi aspernatur ipsum omnis quae illum!</p>
                <ul className="space-y-z py-4">
                    <li><i className="fa-solid fa-check mr-2"></i><span>50GB File Storage</span></li>
                    {/* <li><i className="fa-solid fa-check mr-2"></i><span></span></li> */}
                </ul>
                <div className="mr-4 text-center border border-blue-600 rounded-3xl py-2 px-4 text-blue-600 hover:bg-blue-600 hover:text-white">Request a demo</div>
            </div>
            <div className="w-72 h-auto my-4 text-gray-400 rounded-lg bg-cover bg-white px-8 py-4">
                <h3 className="text-lg text-blue-600 font-bold">Start-up</h3>
                <h3 className="text-lg text-blue-600 font-bold">Free Forever</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dolor natus enim id deserunt, aut, corporis distinctio libero corrupti animi iusto quisquam, repudiandae molestiae commodi aspernatur ipsum omnis quae illum!</p>
                <ul className="space-y-z py-4">
                    <li><i className="fa-solid fa-check mr-2"></i><span>50GB File Storage</span></li>
                    {/* <li><i className="fa-solid fa-check mr-2"></i><span></span></li> */}
                </ul>
                <div className="mr-4 text-center border rounded-3xl py-2 px-4 bg-blue-600 text-white">Request a demo</div>
            </div>
        </div>
    )
}

export default Subscribe;