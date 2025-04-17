import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Room.css'

const Room = (props) => {
    const navigate = useNavigate();

    const handleNavigation = (id) => {
        navigate('/room-details/' + id);
    };

    const handleNavigation2 = (id, available) => {
        if (!available) {
            alert('This room is not available');
        } else {
            navigate('/item/' + id);
        }
    }

    return (
        <div className='room'>
            <button onClick={() => handleNavigation(props.id)} className='img-button'><img src={props.image} className='image' height="235px" /></button>
            <div className='no-img'>
                <div className='part1'>
                    <h2 className={(props.available ? 'name' : 'nameF')}>{props.name}</h2>
                    <p className='description'>{props.description}</p>
                    <a href={props.link} target='_blank' className='room-link'>link</a>
                    <ul>
                        {(props.facilities || []).map((facility) => (
                            <li key={facility}>{facility}</li>
                        ))}
                    </ul>
                    <h3 className={(props.available ? 'available' : 'unavailable')}>unavailable</h3>
                    <h4 className='price'>price: {props.price}$</h4>
                </div>
                <div className='part2'>
                    <div className='rating-section'>
                        <div className='rate'>
                            <span className='rating-text'>{props.ratingText}</span>
                            <span className='reviews'>{props.reviews} reviews</span>
                        </div>
                        <div className='rating'>{props.rating}</div>
                    </div>
                    <button className={(props.available ? 'book' : 'bookF')} onClick={() => handleNavigation2(props.id, props.available)}>book</button>
                </div>
            </div>
        </div>
    )
}

export default Room