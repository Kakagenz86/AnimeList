import Header from "@/app/component/AnimeTop/header";
import AnimeTop from "@/app/component/AnimeTop";

const Page = async ({params}) => {
    const {id} = params;
    const decodeId = decodeURI(id)
    const res = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeId}`)
    const searchAnime = await res.json()

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