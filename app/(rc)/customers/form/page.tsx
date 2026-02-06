import {getCustomers} from "@/lib/Query/getCustomers";
import BackBtn from "@/components/BackBtn";

export default async function CustomerFormPage({
    searchParams}:{searchParams:Promise<{[key:string]: string | undefined}>}){
    try{
        const {customerId} = await searchParams;
        if(customerId){
            const customer = await getCustomers(parseInt(customerId))
            if(!customer){
                return (
                    <>
                        <h2 className={"text-2xl mb-2"}>Customer ID #{customerId} not found</h2>
                        <BackBtn title={"Go Back"} variant={"default"} />
                    </>
                )
            }
            // put customer form component
            console.log(customer)
        } else{
            // new customer form component
            console.log("no customer")
        }
    }catch (e) {
        if(e instanceof Error){
            throw e
        }
    }

}