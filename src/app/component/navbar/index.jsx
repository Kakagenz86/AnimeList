import Link from "next/link";
import InputSearch from "./inputsearch";

const Navbar = () => {
    return (
        <header className=" bg-slate-400">
            <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-2">
                <Link className="font-bold text-2xl" href='/'>GENZANIME</Link>
                <InputSearch/>
                <Link href='/api/auth/signin'>Sign In</Link >
            </div>
        </header>
    );
}

export default Navbar;