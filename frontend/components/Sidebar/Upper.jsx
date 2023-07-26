import React, { useState } from 'react';
import Route from './Route';
import IconLeft from '../../assets/images/IconLeft.svg';
import IconRight from '../../assets/images/IconRight.svg';
import IconBar from '../../assets/images/IconBar.svg';

function Upper({ onExpendedChange }) {
  //function handle expended change
  const handleExpendedChange = (value) => {
    setExpended(value);
    onExpendedChange(value);
  };

  //useState to use
  const [isExpended, setExpended] = useState(false);
  const [isHover, setHover] = useState(false);

  return (
    <div className="relative pt-[20px]">
      <div className="absolute top-0 right-0 p-[14px]">
        <button
          className="w-[40px] h-[40px] bg-transparent border-none"
          onClick={() => handleExpendedChange(!isExpended)} //when click button, state of expended will be change

          // hanle event hover to bars-button
          onMouseEnter={() => {
            if (!isHover) {
              setHover(true);
            }
          }}
          onMouseLeave={() => {
            if (isHover) {
              setHover(false);
            }
          }}
        >
          <img
            className={`w-[20px] h-[20px] ${isHover ? 'hidden' : 'inline-block'}`}
            src={IconBar}
            alt="#Bars"
          />
          <img
            className={`w-[20px] h-[20px] ${isHover && isExpended ? 'inline-block' : 'hidden'}`}
            src={IconLeft}
            alt="#chevLeft"
          />
          <img
            className={`w-[20px] h-[20px] ${isHover && !isExpended ? 'inline-block' : 'hidden'}`}
            src={IconRight}
            alt="#chevRight"
          />
        </button>
      </div>
      <div>
        {/* pass the state of isExpended through the Route component */}
        <Route isExpended={isExpended} />
      </div>
    </div>
  );
}

export default Upper;
