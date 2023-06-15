
import { response } from '../../../../Sample';
import Card from './Card'


import Skelton from './Skelton';
const loading = false

function Tickets() {

    let { data } = response



    return (
        <div className="lg:col-span-8 md:col-span-6">
            <div className="grid grid-cols-1 gap-[30px]">


                {loading ? (
                    <Skelton count={5} />
                ) : (
                    data?.map((data, index) => <Card data={data} index={index} />)
                  
                )}
            </div>
            {/* <Pagination page={page} pages={pages} changePage={changePage} /> */}
        </div>
    )
}

export default Tickets