import React, { useState, useEffect } from 'react';
import './LanguageSelect.css'

const LanguageSelect = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    useEffect(() => {
        const selectElement = document.getElementById('language-select');
        selectElement.style.backgroundImage = `url(${selectedOption.img})`;
    }, [selectedOption]);

    const handleChange = (event) => {
        const selected = options.find(option => option.value === event.target.value);
        setSelectedOption(selected);
    };

    return (
        <select id="language-select" onChange={handleChange} value={selectedOption.value}>
            {options.map((option) => (
                <option key={option.value} value={option.value} data-img={option.img}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelect;
