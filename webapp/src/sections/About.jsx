export default function About() {
    return(
    <section id="about">
        <h2 className="text-2xl mt-5 text-center text-white">About Us</h2>
        <div className="m-auto h-1 bg-zinc-300 w-45 my-5"></div>
        <div className="flex flex-row items-center justify-around flex-wrap p-5">
            <div className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-2xl
            flex flex-col sm:flex-row my-4 max-w-xl lg:md:max-w-2xl bg-zinc-400/45">
                <div className="md:shrink-0">
                    <img src="src/assets/aboutPic_1.jpg" alt="Stock Photo" 
                    className="object-cover h-48 w-full md:h-full sm:w-48
                    md:rounded-bl-2xl md:rounded-tl-2xl"/>
                </div>
                <div className="p-8 w-125">
                    <h3 className="text-2xl mb-0.5 text-white">Competence</h3>
                    <p className="mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit blanditiis, 
                        at voluptas dolorum ex amet ipsum id tempora quas, sit dignissimos odio voluptatibus, 
                        dolor dicta repellat molestias labore? Consequuntur, accusantium?</p>
                    <p className="mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit blanditiis, 
                        at voluptas dolorum ex amet ipsum id tempora quas, sit dignissimos odio voluptatibus, 
                        dolor dicta repellat molestias labore? Consequuntur, accusantium?</p>
                </div>
            </div>
            <div className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-2xl
            flex flex-col sm:flex-row my-4 max-w-xl lg:md:max-w-2xl bg-zinc-400/45">
                <div className="md:shrink-0">
                    <img src="src/assets/aboutPic_2.jpg" alt="Stock Photo" 
                    className="object-cover h-48 w-full md:h-full sm:w-48
                    md:rounded-bl-2xl md:rounded-tl-2xl"/>
                </div>
                <div className="p-8 w-125">
                    <h3 className="text-2xl mb-0.5 text-white">Integrity</h3>
                    <p className="mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit blanditiis, 
                        at voluptas dolorum ex amet ipsum id tempora quas, sit dignissimos odio voluptatibus, 
                        dolor dicta repellat molestias labore? Consequuntur, accusantium?</p>
                    <p className="mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit blanditiis, 
                        at voluptas dolorum ex amet ipsum id tempora quas, sit dignissimos odio voluptatibus, 
                        dolor dicta repellat molestias labore? Consequuntur, accusantium?</p>
                </div>
            </div>
            <div className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-2xl
            flex flex-col sm:flex-row my-4 max-w-xl lg:md:max-w-2xl bg-zinc-400/45">
                <div className="md:shrink-0">
                    <img src="src/assets/aboutPic_3.jpg" alt="Stock Photo" 
                    className="object-cover h-48 w-full md:h-full sm:w-48
                    md:rounded-bl-2xl md:rounded-tl-2xl"/>
                </div>
                <div className="p-8 w-125">
                    <h3 className="text-2xl mb-0.5 text-white">Competitiveness</h3>
                    <p className="mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit blanditiis, 
                        at voluptas dolorum ex amet ipsum id tempora quas, sit dignissimos odio voluptatibus, 
                        dolor dicta repellat molestias labore? Consequuntur, accusantium?</p>
                    <p className="mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit blanditiis, 
                        at voluptas dolorum ex amet ipsum id tempora quas, sit dignissimos odio voluptatibus, 
                        dolor dicta repellat molestias labore? Consequuntur, accusantium?</p>
                </div>
            </div>
        </div>  
    </section>
    )
};
