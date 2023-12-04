import { useNavigate, useParams } from 'react-router-dom';
import './Delete.css';
import { useEffect, useRef } from 'react';
import { deleteOneGig } from '../../../services/gigService';

function Delete() {
    const { gigId } = useParams();
    const navigate = useNavigate();
    const isDeleteExecuted = useRef(false);

    useEffect(() => {
        if (!isDeleteExecuted.current) {
            deleteOneGig(gigId);
            isDeleteExecuted.current = true;
            navigate('/catalog');
        }
    }, [gigId, navigate])
}

export default Delete;