import { Link } from 'react-router-dom';
import './Gig.css'

function Gig(props) {
    const gig = props;

    return (
        <Link to={`/gig/${gig.data._id}`} className='gig'>
                <div className='gigUpper'>
                    {gig.data.owner.imageUrl ?
                    <img src={gig.data.owner.imageUrl} alt="" /> :
                    <img src='/images/profilePlaceholder.jpg' alt="" />}
                    <div>
                        <h2 className='gigName'>{gig.data.owner.username}</h2>
                        <h2 className='gigTitle'>{gig.data.title}</h2>
                    </div>
                </div>
                <hr />
                <div className='gigLower'>
                    <h2>{gig.data.type}</h2>
                    <h2>{gig.data.price}$</h2>
                </div>
        </Link>
    )
}

export default Gig;