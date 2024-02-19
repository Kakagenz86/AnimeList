import Header from "@/app/component/AnimeTop/header";
import AnimeTop from "@/app/component/AnimeTop";
import { getAnime } from "@/lib/api-lib";

const Page = async ({params}) => {
    const {id} = params;
    const decodeId = decodeURI(id)
    const searchAnime = await getAnime("anime", `q=${decodeId}`)

    return ( 
        <div>
            <section>
                <Header title={`pencarian untuk ${decodeId}...`}/>
                <AnimeTop api={searchAnime} />
            </section>
        </div>
    );
}

export default Page;