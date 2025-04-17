import React from 'react';
import './Booked.css';

const Booked = ({ rooms, onRemoveBook }) => {

    return (
        <div className="booked-rooms">
            <h1>Booked Rooms</h1>
            {rooms.length === 0 ? (
                <p className="no-rooms">No rooms are booked</p>
            ) : (
                rooms.map((room, index) => (
                    <div key={room.id} className="room">
                        <img src={room.image} alt={room.name} height="235px" className='booked-image' />
                        <div className="booked">
                            <h3>{room.name}</h3>
                            <p>{room.description}</p>
                            <p>Price: ${room.price} per night</p>
                            <p>Check-in: {room.startDate}</p>
                            <p>Check-out: {room.endDate}</p>
                            <p>Total Cost: ${room.totalCost}</p>
                        </div>
                        <button onClick={() => onRemoveBook(index)} className="remove-button">
                            Remove Booking
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};
export default Booked;