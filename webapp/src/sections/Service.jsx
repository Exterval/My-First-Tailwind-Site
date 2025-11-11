import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { PiBlueprintLight } from "react-icons/pi";
import { FiDatabase } from "react-icons/fi";

export default function Service() {
    return(
        <section id="service">
            <div className="mt-5 flex flex-col justify-center items-center bg-[url(src/assets/serviceBg.jpg)]
            bg-cover bg-no-repeat">
                <h2 className="text-center text-2xl p-5 text-black">Our Services</h2>
                <div className="m-auto h-1 bg-zinc-700 w-45"></div>
                <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-2 p-5">
                    <div className="p-5 rounded-xl flex flex-col items-center w-100 h-fit 
                    hover:backdrop-blur-xl hover:border-white/5 transition-all duration-300 ease-in-out">
                        <div className="text-center p-2 rounded-4xl text-2xl"><CgWebsite /></div>
                        <p className="text-xl mt-2">Web Development</p>
                        <p className="text-center my-1 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur mollitia dicta ut. 
                            Architecto repellendus alias ipsum voluptate soluta ab, 
                            natus rerum perspiciatis excepturi similique, saepe recusandae dolorum asperiores provident!</p>
                        <button className="text-white p-3 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white">Learn more</button>
                    </div>
                    <div className="p-5 rounded-xl flex flex-col items-center w-100 h-fit
                    hover:backdrop-blur-xl hover:border-white/5 transition-all duration-300 ease-in-out">
                        <div className="text-center p-2 rounded-4xl text-2xl"><MdOutlineDesignServices /></div>
                        <p className="text-xl mt-2">UI/UX Design</p>
                        <p className="text-center my-1 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nostrum id saepe aliquam, consectetur consequuntur tenetur officia incidunt iste, 
                            aut dolorum ipsa repellendus natus velit ipsam adipisci voluptatem, in ex!</p>
                        <button className=" text-white p-3 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white">Learn more</button>
                    </div>
                    <div className="p-5 rounded-xl flex flex-col items-center w-100 h-fit
                    hover:backdrop-blur-xl hover:border-white/5 transition-all duration-300 ease-in-out">
                        <div className="text-center p-2 rounded-4xl text-2xl"><IoPhonePortraitOutline /></div>
                        <p className="text-xl mt-2">Mobile Development</p>
                        <p className="text-center my-1 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae adipisci accusamus consequatur dignissimos, reprehenderit repellendus porro! 
                            Incidunt corrupti minima pariatur, fugit, iste cumque mollitia, deleniti quod excepturi vitae nam qui!</p>
                        <button className="text-white p-3 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white">Learn more</button>
                    </div>
                    <div className="p-5 rounded-xl flex flex-col items-center w-100 h-fit
                    hover:backdrop-blur-xl hover:border-white/5 transition-all duration-300 ease-in-out">
                        <div className="text-center p-2 rounded-4xl text-2xl"><IoIosCloudOutline /></div>
                        <p className="text-xl mt-2">Cloud Integration</p>
                        <p className="text-center my-1 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci est voluptas ea libero recusandae obcaecati enim explicabo alias ipsam, 
                            perspiciatis voluptatibus vel eaque, quam quisquam doloremque velit modi fugit expedita?</p>
                        <button className="text-white p-3 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white">Learn more</button>
                    </div>
                    <div className="p-5 rounded-xl flex flex-col items-center w-100 h-fit
                    hover:backdrop-blur-xl hover:border-white/5 transition-all duration-300 ease-in-out">
                        <div className="text-center p-2 rounded-4xl text-2xl"><PiBlueprintLight /></div>
                        <p className="text-xl mt-2">Product Strategy</p>
                        <p className="text-center my-1 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti delectus distinctio, 
                            dicta eum molestias ex aut iusto quaerat nam rem tenetur possimus impedit accusamus corporis quos eveniet expedita facere quo.</p>
                        <button className="text-white p-3 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white">Learn more</button>
                    </div>
                    <div className="p-5 rounded-xl flex flex-col items-center w-100 h-fit
                    hover:backdrop-blur-xl hover:border-white/5 transition-all duration-300 ease-in-out">
                        <div className="text-center p-2 rounded-4xl text-2xl"><FiDatabase /></div>
                        <p className="text-xl mt-2">API & Backend Integration</p>
                        <p className="text-center my-1 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident, adipisci minus fuga eligendi corrupti libero quia molestias quos. 
                            Quo odit natus quam nobis cum voluptates ipsam repudiandae aliquid earum!</p>
                        <button className="text-white p-3 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xs cursor-pointer
                        transition-all duration-300 ease-out border-white">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
};
