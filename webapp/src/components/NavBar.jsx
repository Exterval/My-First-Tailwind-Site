export default function NavBar() {
    return(
        <div className="w-screen h-20 flex flex-row justify-around mb-5" style={{position: 'sticky', top: '0'}}>
            <img src="src/assets/logo.png" className="object-contain w-full" style={{textAlign: 'center'}} alt="Logo Image" />
            <ul className="flex flex-row items-center justify-evenly w-full rounded-bl-3xl backdrop-blur-lg border border-white/5
            transition-all duration-300 ease-in-out">
                <li className="rounded-4xl py-2" style={{transition: '0.2s ease-in'}}><a href="#main" className="hover:text-zinc-200 text-sm lg:text-base md:text-base" style={{transition: '0.2s ease-in-out'}}>Home</a></li>
                <li className="rounded-4xl py-2" style={{transition: '0.2s ease-in'}}><a href="#section" className="hover:text-zinc-200 text-sm lg:text-base md:text-base" style={{transition: '0.2s ease-in-out'}}>About</a></li>
                <li className="rounded-4xl py-2" style={{transition: '0.2s ease-in'}}><a href="#service" className="hover:text-zinc-200 text-sm lg:text-base md:text-base" style={{transition: '0.2s ease-in-out'}}>Services</a></li>
            </ul>
        </div>
    )
};
