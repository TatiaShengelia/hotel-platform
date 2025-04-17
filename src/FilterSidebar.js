import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ selectedRooms, setSelectedRooms, selectedFacilities, setSelectedFacilities, selectedRatings, setSelectedRatings, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
    const availability = [
        'all',
        'available',
        'unavailable',
    ]
    
    const facilities = [
        'private bathroom',
        'shower',
        'air conditioning',
        'balcony',
        'kitchen/kitchenette',
        'bathtub',
    ];

    const rating = [
        '9+',
        '8+',
        '7+',
        '6+',
    ];

    const handleFacilityChange = (label) => {
        setSelectedFacilities((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        );
    };

    const handleRatingChange = (label) => {
        setSelectedRatings((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        );
    };

    const handleAvailabilityChange = (label) => {
        setSelectedRooms((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        );
    };

    return (
        <div className="filter-sidebar">
            <h3>Filter unavailable rooms</h3>
            {availability.map(show => (
                <div key={show}>
                    <input
                        type="checkbox"
                        id={show}
                        name={show}
                        checked={selectedRooms.includes(show)}
                        onChange={() => handleAvailabilityChange(show)}
                    />
                    <label htmlFor={show}>{show}</label>
                </div>
            ))}
            <h3>Filter by Facilities</h3>
            {facilities.map(facility => (
                <div key={facility}>
                    <input
                        type="checkbox"
                        id={facility}
                        name={facility}
                        checked={selectedFacilities.includes(facility)}
                        onChange={() => handleFacilityChange(facility)}
                    />
                    <label htmlFor={facility}>{facility}</label>
                </div>
            ))}
            <h3>Filter by rating</h3>
            {rating.map(rating => (
                <div key={rating}>
                    <input
                        type="checkbox"
                        id={rating}
                        name={rating}
                        checked={selectedRatings.includes(rating)}
                        onChange={() => handleRatingChange(rating)}
                    />
                    <label htmlFor={rating}>{rating}</label>
                </div>
            ))}
            <h3>Set minimum and maximum prices</h3>
            <div>
                <label htmlFor="minPrice">minimum price:</label>
                <input
                    type="number"
                    min={0}
                    id="minPrice"
                    name="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="maxPrice">maximum price:</label>
                <input
                    type="number"
                    min={0}
                    id="maxPrice"
                    name="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
