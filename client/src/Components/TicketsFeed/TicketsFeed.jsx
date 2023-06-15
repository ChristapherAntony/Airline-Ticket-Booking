
import './css/styles.css'
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux'
import Filter from './Filter';
import Tickets from './Tickets';


export default function TicketsFeed() {

    return (
        <div className="outer1">
            <section className="relative  md:py-10 py-16">
                <div className="mycontainer ">
                    <div className="grid bg-white  rounded-xl md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <Filter />

                        {/* <Jobs page={page} pages={pages} changePage={setPage} jobs={jobs} handleRefresh={handleRefresh} loading={loading} /> */}
                        <Tickets/>


                    </div>

                </div>


            </section>
            {/*end section*/}


        </div>
    );
}
