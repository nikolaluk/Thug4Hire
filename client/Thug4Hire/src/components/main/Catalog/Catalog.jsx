import { useEffect, useState } from 'react'
import { getAllGigs } from '../../../services/gigService';
import './Catalog.css'

function Catalog() {
    const [gigs, setGigs] = useState();

    useEffect(() => {
        getAllGigs()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
}

export default Catalog