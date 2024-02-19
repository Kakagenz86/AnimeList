import { getAnime } from "@/lib/api-lib";
import Image from "next/image";
import VideoPlayer from "@/app/component/Utilities/videoplayer";

const Page = async ({params: {id}}) => {
        const detail = await getAnime (`anime/${id}`)
        // console.log (detail);

    return (
        <div className="text-white">
            <div>
                <h1>{detail.data.title} - {detail.data.year}</h1>
            </div>
                <div className="gap-2 px-4 pt-4 flex overflow-x-auto">
                    <div className="border flex flex-col justify-center items-center rounded p-1 w-36 text-center">
                        <h3>PERINGKAT</h3>
                        <p>{detail.data.rank}</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center rounded p-1 w-36 text-center">
                        <h3>RATING</h3>
                        <p>{detail.data.rating}</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center rounded p-1 w-36 text-center">
                        <h3>SKOR</h3>
                        <p>{detail.data.score}</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center rounded p-1 w-36 text-center">
                        <h3>EPISODE</h3>
                        <p>{detail.data.episodes}</p>
                    </div>
                </div>
            <div className=" gap-2 px-4 pt-4 flex md:flex-row flex-col">
                <Image src={detail.data.images.webp.image_url} alt={detail.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover"/>
                <p className="md:text-xl">{detail.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={detail.data.trailer.youtube_id} />
            </div>
        </div>
    );
}

export default Page;