import FlightOfferSearchForm from "../Components/FlighOfferSearchForm/FlightOfferSearchForm"
import NavBar from "../Components/NavBar"
import TicketsFeed from "../Components/TicketsFeed/TicketsFeed"


function FlightOfferSearchPage() {
    return (
        <>
            <NavBar />
            <FlightOfferSearchForm />
            <TicketsFeed />
        </>
    )
}

export default FlightOfferSearchPage