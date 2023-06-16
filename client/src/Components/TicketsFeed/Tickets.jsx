
import { useSelector } from 'react-redux';
import Card from './Card'


import Skelton from './Skelton';
import { getAllOffers } from '../../api/axiosCalls/offers';
import { useEffect, useState } from 'react';
import { errorTost } from '../tost';
import { useNavigate } from 'react-router-dom';


function Tickets() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const searchKey = useSelector(state => state.searchkey);

    const getOffers = () => {
        getAllOffers(searchKey).then((result) => {
            console.log(result.data.data);
            setData(result.data.data)
            if (result.data.data.length < 1) {
                errorTost("No tickets found, try again")
            } else {
                setLoading(false)
            }
        }).catch((err) => {
            console.log(err);
            // errorTost('some thing went wrong')
            navigate('/', { replace: true })

        });

    }

    useEffect(() => {
        if (!searchKey.departureDate) {
            navigate('/', { replace: true })
        }

        setLoading(true)
        getOffers()

    }, [searchKey])

    return (
        <div className="lg:col-span-8 md:col-span-6">
            <div className="grid grid-cols-1 gap-[30px]">


                {loading ? (
                    <Skelton count={5} />
                ) : (
                    data?.map((data, index) => <Card data={data} key={index} />)

                )}
            </div>
            {/* <Pagination page={page} pages={pages} changePage={changePage} /> */}
        </div>
    )
}

export default Tickets