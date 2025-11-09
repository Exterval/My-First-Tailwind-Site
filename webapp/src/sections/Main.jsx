export default function Main() {
    return(
        <section id="main">
            <div className="bg-linear-to-r from-zinc-200 to-zinc-500 w-full flex flex-row justify-around items-center my-4" style={{height: '500px'}}>
                <div className="">
                    <h1 className="text-4xl">We make meaningful applications.</h1>
                    <p className="text-2xl text-zinc-500 mb-5 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non.</p>
                    <div className="mx-auto flex flex-row">
                        <button className="bg-black text-white p-4 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white" id="">Contact Us!</button>
                    </div>
                </div>
                <div className="w-fit">
                    <img src="src/assets/placeholder.jpg" alt="Image" className="object-contain w-full" />
                </div>
                {/* <div className="">
                    <h1 className="text-center text-4xl">We make meaningful applications.</h1>
                    <p className="text-2xl text-zinc-500 text-center mb-5 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non.</p>
                    <div className="mx-auto flex flex-row">
                        <button className="bg-black text-white p-4 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white" id="">Contact Us!</button>
                    </div>
                </div>         */}
            </div> 
        </section>
    )
};
