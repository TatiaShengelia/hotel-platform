import React, { useState, useContext } from 'react';
import FilterSidebar from './FilterSidebar';
import Search from './Search';
import Sort from './Sort';
import Room from './Room';
import './Home.css';
import Footer from './Footer';

import room1 from './images/room1/room1.png';
import room2 from './images/room2/room2.png';
import room3 from './images/room3/room3.png';
import room4 from './images/room4/room4.png';
import room5 from './images/room5/room5.png';
import room6 from './images/room6/room6.png';
import room7 from './images/room7/room7.png';
import room8 from './images/room8/room8.png';
import room9 from './images/room9/room9.png';
import room10 from './images/room10/room10.png';
import room11 from './images/room11/room11.png';

const Home = () => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const [sortOption, setSortOption] = useState('default');

    const handleSort = (event) => {
        const [key, order] = event.target.value.split('-');
        const ascending = order === 'asc';
        setSortOption(event.target.value);
        setRooms(Sort([...rooms], key, ascending));
    };

    const [rooms, setRooms] = useState([
        { id: 1, name: 'room BA43', image: room1, description: 'small and cozy room with private bathroom, air conditioning, shower, kitchen/kitchenette, balcony', facilities: ['private bathroom', 'air conditioning', 'shower', 'kitchen/kitchenette', 'balcony'], price: 180, ratingText: 'wonderful', reviews: 1453, rating: 9.5, link: 'https://www.youtube.com/watch?v=GZ4vaTRn0HU', available: true },
        { id: 2, name: 'room DS44', image: room2, description: 'small and cozy room with private bathroom, air conditioning, bathtub', facilities: ['private bathroom', 'air conditioning', 'bathtub'], price: 120, ratingText: 'good', reviews: 1654, rating: 7.2, link: 'https://www.youtube.com/watch?v=U2W173hRfyA', available: false },
        { id: 3, name: 'room FD32', image: room3, description: 'small and cozy room with private bathroom, air conditioning, bathtub', facilities: ['private bathroom', 'air conditioning', 'bathtub'], price: 125, ratingText: 'good', reviews: 1765, rating: 7.7, link: 'https://www.youtube.com/watch?v=gOtOWeD9YJk', available: true },
        { id: 4, name: 'room CK88', image: room4, description: 'small and cozy room with private bathroom, air conditioning, bathtub, kitchen/kitchenette, balcony', facilities: ['private bathroom', 'air conditioning', 'bathtub', 'kitchen/kitchenette', 'balcony'], price: 160, ratingText: 'wonderful', reviews: 1789, rating: 9.6, link: 'https://www.youtube.com/watch?v=O3wlMR0y4a4', available: true },
        { id: 5, name: 'room HD76', image: room5, description: 'small and cozy room with private bathroom, air conditioning, shower, kitchen/kitchenette', facilities: ['private bathroom', 'air conditioning', 'shower', 'kitchen/kitchenette'], price: 180, ratingText: 'wonderful', reviews: 1243, rating: 9.2, link: 'https://www.youtube.com/watch?v=_PsBoqNwYo4', available: true },
        { id: 6, name: 'room AC37', image: room6, description: 'small and cozy room with private bathroom, air conditioning, shower, balcony', facilities: ['private bathroom', 'air conditioning', 'shower', 'balcony'], price: 140, ratingText: 'very good', reviews: 1243, rating: 8.6, link: 'https://www.youtube.com/watch?v=CCUr2pNJft4', available: true },
        { id: 7, name: 'room GL65', image: room7, description: 'small and cozy room with private bathroom, air conditioning, bathtub, kitchen/kitchenette, balcony', facilities: ['private bathroom', 'air conditioning', 'bathtub', 'kitchen/kitchenette', 'balcony'], price: 190, ratingText: 'wonderful', reviews: 1345, rating: 9.6, link: 'https://www.youtube.com/watch?v=wRKXAAV6jh4', available: true },
        { id: 8, name: 'room ET98', image: room8, description: 'small and cozy room with private bathroom, air conditioning, shower, kitchen/kitchenette', facilities: ['private bathroom', 'air conditioning', 'shower', 'kitchen/kitchenette'], price: 130, ratingText: 'good', reviews: 1456, rating: 7.4, link: 'https://www.youtube.com/watch?v=EVbtjaWXQVg', available: false },
        { id: 9, name: 'room IM23', image: room9, description: 'small and cozy room with private bathroom, air conditioning, shower', facilities: ['private bathroom', 'air conditioning', 'shower'], price: 130, ratingText: 'very good', reviews: 1453, rating: 8.9, link: 'https://www.youtube.com/watch?v=w-FkV0EM_CU', available: false },
        { id: 10, name: 'room JD65', image: room10, description: 'small and cozy room with private bathroom, air conditioning, shower, kitchen/kitchenette', facilities: ['private bathroom', 'air conditioning', 'shower', 'kitchen/kitchenette'], price: 140, ratingText: 'wonderful', reviews: 1678, rating: 9.3, link: 'https://www.youtube.com/watch?v=bAi80EylyXQ', available: true },
        { id: 11, name: 'room KL87', image: room11, description: 'small and cozy room with private bathroom, air conditioning, shower, balcony', facilities: ['private bathroom', 'air conditioning', 'shower', 'balcony'], price: 150, ratingText: 'very good', reviews: 1786, rating: 8.7, link: 'https://www.youtube.com/watch?v=vOZFiX6hDXQ', available: false },
    ]);

    // i would like to point out that since i had no idea what links to put, i put taylor swift songs. hope you love them <3

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredItems = rooms.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filterRooms = (room) => {
        const isAvailable = selectedRooms.every(show => {
            if (show == 'all') {
                return true
            }
            else if (show == 'available') {
                return room.available == true
            }
            else if (show == 'unavailable') {
                return room.available == false
            }
        }
        )

        const hasSelectedFacilities = selectedFacilities.every(facility =>
            room.facilities.includes(facility)
        );

        const hasSelectedRating = selectedRatings.length === 0 || selectedRatings.some(score => {
            const minRating = parseInt(score.split('+')[0], 10);
            return room.rating >= minRating;
        });

        const roomPrice = room.price;
        const min = minPrice === '' ? 0 : parseInt(minPrice, 10);
        const max = maxPrice === '' ? Infinity : parseInt(maxPrice, 10);

        const search = room.name.toLowerCase().includes(searchQuery.toLowerCase());

        return isAvailable && hasSelectedFacilities && hasSelectedRating && roomPrice >= min && roomPrice <= max && search;
    };

    return (
        <>
            <div className='main'>
                <FilterSidebar
                    selectedRooms={selectedRooms}
                    setSelectedRooms={setSelectedRooms}
                    selectedFacilities={selectedFacilities}
                    setSelectedFacilities={setSelectedFacilities}
                    selectedRatings={selectedRatings}
                    setSelectedRatings={setSelectedRatings}
                    minPrice={minPrice}
                    setMinPrice={setMinPrice}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                />
                <div className='rooms'>
                    <div className='sort-search'>
                        <select id="sortSelect" value={sortOption} onChange={handleSort}>
                            <option value="default" hidden>Sort</option>
                            <option value="name-asc">Name (Ascending)</option>
                            <option value="name-desc">Name (Descending)</option>
                            <option value="price-asc">Price (Ascending)</option>
                            <option value="price-desc">Price (Descending)</option>
                            <option value="rating-asc">Rating (Ascending)</option>
                            <option value="rating-desc">Rating (Descending)</option>
                        </select>
                        <Search searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                            filteredItems={filteredItems} />
                    </div>
                    {rooms.filter(filterRooms).map((room) => (
                        <Room key={room.id} {...room} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
