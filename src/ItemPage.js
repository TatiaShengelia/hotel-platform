import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemPage.css';
import { Data } from './Data.js'

const ItemPage = ({ onBookRoom }) => {
  const { id } = useParams();
  const itemIndex = Number(id) - 1;
  const item = Data[itemIndex];
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = (end - start) / (1000 * 60 * 60 * 24);
      console.log(days);
      const cost = days * parseFloat(item.price);
      console.log(cost);
      setTotalCost(cost.toFixed(2));
    }
  }, [startDate, endDate, item.price]);

  if (!item) {
    return <p>Item not found</p>;
  }

  if (!item.available) {
    return <p>This room is not available</p>;
  }

  const handleBookClick = () => {
    setShowDatePicker(true);
  };

  const handleConfirmBooking = () => {
    if (startDate && endDate) {
      onBookRoom({ ...item, startDate, endDate, totalCost });
      setShowDatePicker(false);
      setStartDate('');
      setEndDate('');
    } else {
      alert('Please select both start and end dates');
    }
  };

  return (
    <div className="item-container">
      <img src={item.image} alt={item.name} height="250px" className='item-image' />
      <div className="item-desc">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price} per night</p>
        {!showDatePicker ? (
          <button className="book-button" onClick={handleBookClick}>Book Now</button>
        ) : (
          <div className='date-and-button'>
            <div className="date-picker">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate || new Date().toISOString().split('T')[0]}
              />
            </div>
            {totalCost >= 0 && <p>Total cost: ${totalCost}</p>}
            <button className="book-button2" onClick={handleConfirmBooking}>Confirm Booking</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemPage;