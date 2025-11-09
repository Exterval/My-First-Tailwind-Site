import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
    /* Footer here */
    return(
    <div className="bottom-0 w-full h-fit bg-zinc-800 p-5 text-center fixed-bottom md:fixed lg:fixed">
        <p className="text-white">Our socials:</p>
        <div className="text-white m-auto w-32 mt-2" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <a href="#"><BsTwitterX /></a>
            <a href="#"><BsFacebook /></a>
            <a href="#"><BsYoutube /></a>
        </div>
    </div>
    )
};
