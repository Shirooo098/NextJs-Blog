export default function Layout({children}: {children: React.ReactNode}){
    return(
        <div>
            <div>Side Nav</div>
            <div>{children}</div>
        </div>
    )
}