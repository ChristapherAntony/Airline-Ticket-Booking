import FlightOfferSearchForm from "../Components/FlighOfferSearchForm/FlightOfferSearchForm"
import NavBar from "../Components/NavBar"
import TicketsFeed from "../Components/TicketsFeed/TicketsFeed"



function LandingPage() {

    return (

        <>
            <NavBar />
            <FlightOfferSearchForm/>
            <TicketsFeed/>

        </>


    )
}

export default LandingPage