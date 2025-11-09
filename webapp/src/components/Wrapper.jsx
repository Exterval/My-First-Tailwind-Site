export default function Wrapper({ children }) {
    /* Wrapper here */
    return(
        <div className="bg-zinc-500 h-dvh w-screen sm:w-dvw">
            {children}
        </div>
    )
};
