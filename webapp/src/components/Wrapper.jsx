export default function Wrapper({ children }) {
    /* Wrapper here */
    return(
        <div className="@container bg-zinc-500 h-dvh w-full sm:w-dvw">
            {children}
        </div>
    )
};
