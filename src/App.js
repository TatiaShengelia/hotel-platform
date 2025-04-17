import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Profile from './Profile.js';
import Booked from './Booked.js';
import Contact from './Contact.js';
import Navigation from './Navigation.js';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import RoomOpened from './RoomOpened.js';
import ItemPage from './ItemPage.js';

function App() {
  const [bookedRooms, setBookedRooms] = useState([]);

  const handleBookRoom = (room) => {
    setBookedRooms(prevRooms => [...prevRooms, room]);
  };

  const handleRemoveBook = (index) => {
    setBookedRooms(prevRooms => prevRooms.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booked" element={<Booked rooms={bookedRooms} onRemoveBook={handleRemoveBook} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/room-details/:id" element={<RoomOpened />} />
        <Route path="/item/:id" element={<ItemPage onBookRoom={handleBookRoom} />} />
      </Routes>
    </div>
  );
}

export default App;
