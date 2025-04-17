import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './RoomOpened.css'
import { Data as rooms } from './Data.js'

function RoomOpened() {
    const navigate = useNavigate();

    const handleNavigation = (id, available) => {
        if (!available) {
            alert('This room is not available');
        } else {
            navigate('/item/' + id);
        }
    }

    const { id } = useParams();
    const room = rooms.find(room => room.id === parseInt(id, 10));

    if (!room) {
        return <div className='error-message'>404 room not found</div>;
    }

    const img1 = require('./images/room' + room.id + '/room' + room.id + 'a.jpg');
    const img2 = require('./images/room' + room.id + '/room' + room.id + 'b.jpg');
    const img3 = require('./images/room' + room.id + '/room' + room.id + 'c.jpg');
    console.log(img1)

    return (
        <div className='open-room' key={room.id}>
            <div className='open-images'>
                <img src={room.image} className='open-image' height="190px" />
                <img src={img1} className='open-image' height="190px" />
                <img src={img2} className='open-image' height="190px" />
                <img src={img3} className='open-image' height="190px" />
            </div>
            <div className='open-no-img'>
                <div className='open-no-button'>
                    <div className='open-part1'>
                        <h2 className={(room.available ? 'open-name' : 'open-nameF')}>{room.name}</h2>
                        <p className='open-description'>{room.description}</p>
                        <a href={room.link} target='_blank' className='open-room-link'>link</a>
                        <ul>
                            {(room.facilities || []).map((facility) => (
                                <li key={facility}>{facility}</li>
                            ))}
                        </ul>
                        <h4 className='open-price'>price: {room.price}$</h4>
                        <h3 className={(room.available ? 'open-available' : 'open-unavailable')}>unavailable</h3>
                    </div>
                    <div className='open-part2'>
                        <div className='open-rating-section'>
                            <div className='rate'>
                                <span className='open-rating-text'>{room.ratingText}</span>
                                <span className='open-reviews'>{room.reviews} reviews</span>
                            </div>
                            <div className='open-rating'>{room.rating}</div>
                        </div>
                    </div>
                </div>
                <button className={(room.available ? 'open-book' : 'open-bookF')} onClick={() => handleNavigation(room.id, room.available)}>book</button>
            </div>
        </div>
    )
}

export default RoomOpened