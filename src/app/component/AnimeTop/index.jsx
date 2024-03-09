import Image from "next/image";
import Link from "next/link";

const AnimeTop = ({api}) => {
    return ( 
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime) => {
                return (
                    <div key={anime.mal_id}>
                        <div className=" text-white transition-all">
                            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-72 object-cover"/>
                            <h3 className="font-bold md:text-xl text-sm p-3">{anime.title}</h3>
                        </div>
                            <Link className="transition-all font-bold md:text-xl text-sm p-3 text-color-accent hover:text-white" href={`/detail/${anime.mal_id}`} >Lihat Anime</Link>
                    </div>
                )
                })}
        </div>
    );
}

export default AnimeTop;