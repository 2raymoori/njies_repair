import {getTicket} from "@/lib/getTicket";

const TicketForm = async (
    {searchParams}:{searchParams:Promise<{[key:string]: string | undefined}>}
)=>{
        const {customerId,ticketId} = await searchParams
        if(ticketId){
            const ticket = await getTicket(parseInt(ticketId))
            if(ticket){
                console.log(ticketId,"ß00000000000")
                return (
                    <>
                        {JSON.stringify(ticket)}
                    </>
                )
            }
            return(
                <h1>Sorry there exists an error. not such ticket</h1>
            )

        }
    return(
        <>
            <h1>{customerId}</h1>
            <h1>{ticketId}</h1>
        </>
    )

}
export default TicketForm