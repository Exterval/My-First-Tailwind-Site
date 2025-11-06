export default function Wrapper({ children }) {
    /* Wrapper here */
    return(
        <div className="@container-normal bg-zinc-500 h-dvh">
            {children}
        </div>
    )
};
