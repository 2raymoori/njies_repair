"use client"

import {ButtonHTMLAttributes} from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

type Props = {
    title: string,
    className?: string,
    onClick?: () => void,
    variant?:  'secondary'  | 'outline'|'default' | 'destructive'|"link"|undefined|null
} & ButtonHTMLAttributes<HTMLBodyElement>

const BackBtn = ({title,variant,onClick,className,...props}:Props)=>{
    const router = useRouter()
    return (
        <>
            <Button variant={variant} className={className} onClick={()=>router.back()}></Button>
        </>
    )
}

export default BackBtn