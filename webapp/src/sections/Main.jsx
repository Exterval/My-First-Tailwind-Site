export default function Main() {
    return(
        <section id="main">
            <div className="bg-zinc-200 w-full flex flex-col justify-center my-4" style={{height: '350px'}}>
                <h1 className="text-center text-4xl">Welcome to our Webpage.</h1>
                <p className="text-2xl text-zinc-500 text-center mb-5">Lorem ipsum dolor sit.</p>
                <div className="mx-auto flex flex-row">
                    <button className="bg-black text-white p-4 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs" id="" style={{transition: '0.3s ease-in'}}>Contact Us!</button>
                    <div style={{width: '1px', height:'100%'}} className="bg-zinc-500 mx-3"></div>
                    <button className="bg-white text-black p-4 rounded-2xl hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-2xs" id="" style={{transition: '0.3s ease-in'}}>Sample text</button>
                </div>
            </div>
        </section>
    )
};
