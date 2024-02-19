'use client'

import AnimeTop from "../component/AnimeTop"
import HeaderMenu from "../component/Utilities/Headermenu";;
import Pagination from "../component/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnime } from "../../lib/api-lib";

const TopAnime =  () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const topAnime = await getAnime("top/anime", `page=${page}`)
        setTopAnime(topAnime)
    }

    useEffect (() => {
        fetchData()
    }, [page])


    return (
        <>
            <HeaderMenu title={`Top Anime #${page}`} />
            <AnimeTop api={topAnime}/>
            <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
        </>
    );
}

export default TopAnime;