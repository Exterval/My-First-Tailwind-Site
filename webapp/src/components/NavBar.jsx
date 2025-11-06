export default function NavBar() {
    return(
        <div className="w-dvw h-1/12 flex flex-row justify-around" style={{position: 'sticky', top: '0'}}>
            <img src="src/assets/logo.png" className="object-contain w-full" style={{textAlign: 'center'}} alt="Logo Image" />
            <ul className="flex flex-row items-center justify-evenly w-full bg-zinc-50 rounded-bl-3xl">
                <li className="hover:bg-zinc-500/50 rounded-4xl px-5 py-2" style={{transition: '0.2s ease-in'}}><a href="#main" className="hover:text-zinc-600" style={{transition: '0.2s ease-in'}}>Home</a></li>
                <li className="hover:bg-zinc-500/50 rounded-4xl px-5 py-2" style={{transition: '0.2s ease-in'}}><a href="#" className="hover:text-zinc-600" style={{transition: '0.2s ease-in'}}>About</a></li>
                <li className="hover:bg-zinc-500/50  rounded-4xl px-5 py-2" style={{transition: '0.2s ease-in'}}><a href="#" className="hover:text-zinc-600" style={{transition: '0.2s ease-in'}}>Services</a></li>
            </ul>
        </div>
    )
};
