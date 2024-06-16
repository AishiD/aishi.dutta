/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function TechStack({ img, name }) {
    return (
        <div className="flex flex-col flex-shrink-0 tech-stack items-center w-24 md:w-24 lg:w-32 p-2 bg-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110">
            <img src={img} alt={name} className="w-full h-auto object-contain" />
            <h4 className="text-center mt-2 text-sm md:text-base lg:text-lg">{name}</h4>
        </div>
    );
}

TechStack.propTypes = {
    img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
};

export default TechStack;
