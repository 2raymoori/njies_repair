import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-orange-500 bg-cover bg-center">
      <main className="flex flex-col justify-center  text-center max-w-5xl mx-auto h-dvh">
       <div className={"flex flex-col gap-6 p-12 rounded-xl w-4/5  mx-auto sm:max-w-96 sm:text-2xl bg-white/50 shadow-2xl shadow-amber-200"}>
         <h1 className={"text-4xl font-bold"}>Njies Hardware<br /> Repair Shop</h1>
           <address>
               Kaiser-Friedrich-Straße 134<br />
               14469, Potsdam
           </address>
           <p>Open Daily: 9am to 5pm</p>
           <Link href={"tel:015216800556"} className={"hover:underline"} >
               +4915216800556
           </Link>
       </div>
      </main>
    </div>
  );
}
