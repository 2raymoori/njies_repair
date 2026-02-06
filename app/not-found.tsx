
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {





    return <div className="m-auto justify-center items-center flex flex-col max-w-7xl ">
        <Link href={"/home"} className={"text-5xl hover:underline my-4"}>Go Home</Link>
        <div  >
            <Image src={"/notFound.jpg"} alt={"sdfs"} width={400} height={400} />
        </div>
    </div>
}