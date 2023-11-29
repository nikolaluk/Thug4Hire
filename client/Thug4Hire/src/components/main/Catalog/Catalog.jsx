import Gig from '../../shared/Gig/Gig'

import { useEffect, useState } from 'react'
import { getAllGigs } from '../../../services/gigService';
import './Catalog.css'

function Catalog() {
    const [gigs, setGigs] = useState([]);

    let gigElements = <h2>No Gigs Yet.</h2>

    if(gigs[0]) {
        gigElements = gigs.map((gig) => {
            return <Gig key={gig._id} data={gig}/>
        })
    }

    useEffect(() => {
        getAllGigs()
            .then((data) => {
                setGigs(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
        <div className='catalog'>
            {gigElements}
        </div>
    )
}

export default Catalog