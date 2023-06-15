

function FlightOfferSearchForm() {
    return (
            <section className="bg-gray-100 dark:bg-gray-800 lg:py-0 lg:flex lg:justify-center ">
                <div className="overflow-hidden  bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-7xl lg:w-full lg:shadow-md lg:rounded-xl">
                    <div className="lg:w-1/2">
                        <div
                            className="h-64 bg-cover lg:h-full"
                            style={{
                                backgroundImage:
                                    'url("https://img.freepik.com/free-photo/air-ticket-flight-booking-concept_53876-132674.jpg")'
                            }}
                        />
                    </div>
                    <div className="max-w-xl   m-auto px-6 py-1 lg:max-w-5xl lg:w-1/2">

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                                Book your <span className="text-blue-500">Tickets</span>
                            </h2>
                            <div className="flex">
                                <div className="flex items-center mr-4">
                                    <input
                                        id="inline-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="inline-radio-group"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="inline-radio"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        One Way Trip
                                    </label>
                                </div>
                                <div className="flex items-center mr-4">
                                    <input
                                        id="inline-2-radio"
                                        type="radio"
                                        defaultValue=""
                                        name="inline-radio-group"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="inline-2-radio"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Round Trip
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="link-checkbox"
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="link-checkbox"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Non Stop

                                    </label>
                                </div>




                            </div>


                        </div>
                        <div className="grid  ">
                            <div className="grid space-x-2 lg:space-x-4  grid-flow-col">

                                <div>
                                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                                        From
                                    </label>
                                    <input

                                        type="text"
                                        placeholder="John Doe"
                                        className="block bg-gray-50  mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2   text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                                        TO
                                    </label>
                                    <input

                                        type="text"
                                        placeholder="John Doe"
                                        className="block bg-gray-50  mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2   text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>
                            </div>
                            <div className="grid space-x-2 lg:space-x-4  grid-flow-col">

                                <div>
                                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                                        Departure Date
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="John Doe"
                                        className="block  mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2     text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                                        Return Date
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="John Doe"
                                        className="block  mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2     text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>
                            </div>



                            <div className="grid space-x-2 lg:space-x-4  grid-flow-col">

                                <div >

                                    <label className="block text-sm text-gray-500 dark:text-gray-300">
                                        Adults
                                    </label>
                                    <select
                                        className="block  mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2     text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                        id="adults"
                                    >
                                        <option  value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                    </select>
                                </div>
                                <div >
                                    <label htmlFor="cabin" className="block text-sm text-gray-500 dark:text-gray-300" >
                                        Cabin
                                    </label>
                                    <select
                                        className="block  mt-1 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2     text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                        id="cabin">
                                        <option value="ECONOMY">Economy</option>
                                        <option value="PREMIUM_ECONOMY">Premium Economy</option>
                                        <option value="BUSINESS">Business</option>
                                        <option value="FIRST">First</option>
                                    </select>
                                </div>
                            </div>
                         

                            <button
                                type="button"
                                className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-6 h-11 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 "
                            >
                                Search
                            </button>


                        </div>
                        {/* <div className="h-96 w-60 bg-red-400"></div> */}

                    </div>
                </div>
            </section>

    )
}

export default FlightOfferSearchForm