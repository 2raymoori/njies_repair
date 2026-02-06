"use client"
import NavButton from "@/components/NavButton";
import {FileIcon, HomeIcon, LogOut, UserRound, UsersRound} from "lucide-react";
import Link from "next/link";
import {ModeToggle} from "@/components/ModeToggle";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs";
import {Button} from "@/components/ui/button";

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton, ClerkProvider,
} from '@clerk/nextjs'
import {ThemeProvider} from "@/components/theme-provider";



export const Header = () => {

    /*
        const [authStatus, setAuthStatus] = useState<boolean>(false);
        const callAServerFnc = async ()=>{
            console.log("callAServerFnc");

            const {isAuthenticated} = getKindeServerSession();
            const isUserAuthenticated = await isAuthenticated();
        }
        useEffect(()=>{
            isAuthenticated().then((e)=>{
                console.log(`User authenticated: ${e}`);
                setAuthStatus(e)
            }).catch(console.error);

        },[authStatus])
    */
    return(
           <header className={"animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20"}>

               <SignedOut>
                   <SignInButton />
                   <SignUpButton>
                       <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                           Sign Up
                       </button>
                   </SignUpButton>
               </SignedOut>
               <SignedIn>
                   <UserButton />
               </SignedIn>

               <div className={"flex h-8 items-center justify-between w-full"}>

                   <div className={"flex items-center gap-2"}>
                       <NavButton icon={HomeIcon} label={"Home"} href={"/home"} />
                       <Link href={"/home"} className={"flex items-center gap-2 justify-center ml-0 "} title={"Home"}>
                           <h1 className={"hidden sm:block text-xl font-bold m-0 mt-1"}>Hardware Repair Shop</h1>
                       </Link>
                   </div>
                   <div className={"flex items-center"}>
                       <NavButton icon={FileIcon} label={"Ticket"} href={"/tickets"} />
                       <NavButton icon={UsersRound} label={"Customers"} href={"/customers"} />
                       <ModeToggle />


                   </div>
               </div>
           </header>
    )
}
export default Header