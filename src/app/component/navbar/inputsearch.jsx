'use client'

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const inputRef = useRef();
    const router = useRouter()

    const handleSearch = (e) => {
        const id = inputRef.current.value
        
        if (!id || id.trim() == '') return

        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();
            router.push(`/search/${id}`)
            inputRef.current.value = ''
        }
    }

    return (
        <div className="relative">
            <input 
            placeholder="Cari Anime" 
            className="p-2 w-full"
            ref={inputRef}
            onKeyPress={handleSearch}/>
            <button className="absolute top-2 end-1" onClick={handleSearch}>
                <MagnifyingGlass size={24}/>
            </button>
        </div>
    );
}

export default InputSearch;