export default function NavBar() {
    return(
        <div className="w-dvw h-1/12 flex flex-row justify-around mb-5" style={{position: 'sticky', top: '0'}}>
            <img src="src/assets/logo.png" className="object-contain w-full" style={{textAlign: 'center'}} alt="Logo Image" />
            <ul className="flex flex-row items-center justify-evenly w-full rounded-bl-3xl backdrop-blur-lg border border-white/5
            transition-all duration-300 ease-in-out">
                <li className="hover:bg-zinc-500/20 rounded-4xl px-5 py-2 cursor-pointer" style={{transition: '0.2s ease-in'}}><a href="#main" className="hover:text-zinc-200" style={{transition: '0.2s ease-in-out'}}>Home</a></li>
                <li className="hover:bg-zinc-500/20 rounded-4xl px-5 py-2 cursor-pointer" style={{transition: '0.2s ease-in'}}><a href="#" className="hover:text-zinc-200" style={{transition: '0.2s ease-in-out'}}>About</a></li>
                <li className="hover:bg-zinc-500/20 rounded-4xl px-5 py-2 cursor-pointer" style={{transition: '0.2s ease-in'}}><a href="#" className="hover:text-zinc-200" style={{transition: '0.2s ease-in-out'}}>Services</a></li>
            </ul>
        </div>
    )
};
