/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'

function PubCard({ title, description, linkText }){
  return (
    <div className="flex flex-col min-h-fit font-bold justify-center items-center text-sm">
      <div className="w-fit lg:w-10/12 p-6 rounded-2xl shadow-lg backdrop-blur-md bg-purple-100">
        <div className="text-left mb-2">
          <h1 className="text-xl mb-3 text-purple-700">{title}</h1>
          <p className='font-normal py-4'>{description}</p>
        </div>
        <a
          href="https://www.ingentaconnect.com/content/smart/ijcaes/2022/00000003/00000004/art00005;jsessionid=1sc645sch0o4l.x-ic-live-03"
          className="block w-1/2 md:w-1/2 lg:w-1/4 p-1 text-white bg-purple-800 mx-auto mb-5 text-center rounded-lg shadow-[8px_8px_10px_#bcc4c6,-8px_-8px_10px_#ffffff] active:shadow-[inset_8px_8px_10px_#bcc4c6,inset_-8px_-8px_10px_#ffffff] active:scale-95"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

PubCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
  };
  
  export default PubCard;