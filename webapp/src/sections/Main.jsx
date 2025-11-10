export default function Main() {
    return(
        <section id="main">
            <div className="bg-linear-to-r from-zinc-200 to-zinc-500 w-screen flex justify-center items-center flex-col md:flex-row lg:flex-row" style={{padding: "65px"}}>
                <div className="md:text-left lg:text-left text-center mx-5 w-fit">
                    <h1 className="text-4xl">We make meaningful applications.</h1>
                    <p className="text-xl text-zinc-500 mb-5 mt-2 md:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint blanditiis porro eaque enim itaque laboriosam reiciendis, accusantium, rerum deserunt, laudantium autem ea?
                    </p>
                    <div className="mx-auto items-center">
                        <button className="bg-black text-white p-4 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white" id="">Contact Us!</button>
                    </div>
                </div>
                <div className="m-5 md:w-200">
                    <img src="src/assets/placeholder.jpg" alt="Image" className="w-full h-full shadow-2xl rounded-2xl" />
                </div>
            </div>
        </section>
    )
};
