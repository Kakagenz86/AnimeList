import Image from "next/image";
import Link from "next/link";

const AnimeTop = ({api}) => {
    return ( 
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime) => {
                return (
                    <Link className="cursor-pointer text-white hover:text-color-accent transition-all" key={anime.mal_id} href={`/${anime.mal_id}`}>
                        <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-72 object-cover"/>
                        <h3 className="font-bold md:text-xl text-sm p-3">{anime.title}</h3>
                    </Link>
                )
                })}
        </div>
    );
}

export default AnimeTop;