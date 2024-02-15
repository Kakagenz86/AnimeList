import AnimeTop from "@/app/component/AnimeTop"
// import AnimeNew from "./component/AnimeNew"
import Header from "./component/AnimeTop/header"

const Home = async () => {

  const res = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await res.json()
  // const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const newAnime = await response.json()
  // console.log(anime)
  
  return (
    <>
    {/* Anime Top */}
      <section>
        <Header title="Top Anime" linkHref="/TopAnime" linkTitle="Top Anime"/>
        <AnimeTop api={topAnime} />
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