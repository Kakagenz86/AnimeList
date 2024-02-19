import AnimeTop from "@/app/component/AnimeTop"
import Header from "./component/AnimeTop/header"
import { getAnime, getNestedAnimeResponse, reproduce } from "../lib/api-lib"

const Home = async () => {
  const topAnime = await getAnime("top/anime", "limit=8")
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", 'entry')
  recomendedAnime = reproduce (recomendedAnime, 4)
  
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
    </>
  )
}

export default Home;