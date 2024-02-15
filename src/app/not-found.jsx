'use client'

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center gap-4">
                <FileSearch size={42} color="white"/>
                <h1 className="text-slate-400 font-bold text-2xl">NOT FOUND</h1>
                <Link className="underline transition-all hover:text-slate-400 text-xl text-white" href={'/'}>Kembali</Link>
            </div>
        </div>
    );
}

export default Page;