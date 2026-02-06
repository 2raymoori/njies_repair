import {Button} from "@/components/ui/button";
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Login = ()=>{
    return(
        <main className={"h-dvh flex flex-col items-center gap-6 px-4"}>
            <h1>Repair Shop</h1>
            <Button className={""} title={"Login"} asChild={true} >
                <LoginLink>Sign In</LoginLink>
            </Button>
        </main>

    )
}
export default Login;