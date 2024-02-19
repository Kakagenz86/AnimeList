import AnimeTop from "@/app/component/AnimeTop"
// import AnimeNew from "./component/AnimeNew"
import Header from "./component/AnimeTop/header"
import { getAnime, getNestedAnimeResponse, reproduce } from "../lib/api-lib"

const Home = async () => {
  const topAnime = await getAnime("top/anime", "limit=8")
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", 'entry')
  recomendedAnime = reproduce (recomendedAnime, 4)
  // const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  
  return (
    <>
    {/* Anime Top */}
      <section>
        <Header title="Top Anime" linkHref="/TopAnime" linkTitle="Top Anime"/>
        <AnimeTop api={topAnime} />
      </section>

      {/* Rekomendasi */}
      <section>
        <Header title="Rekomendasi"/>
        <AnimeTop api={recomendedAnime} />
      </section>

      {/* Anime New */}
      {/* <section>
        <Header title="New Anime" linkHref="/new/anime" linkTitle="New Anime"/>
        <AnimeNew animeNew={newAnime} />
      </section> */}
    </>
  )
}

export default Home;