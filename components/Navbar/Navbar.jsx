export default function Navbar(){
    return(
        <nav className="w-full flex justify-between items-centre p-6 bg-black text-white">
            <h1 className="text-xl font-bold">Sach Patel</h1>
            <div className="space-x-6">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}