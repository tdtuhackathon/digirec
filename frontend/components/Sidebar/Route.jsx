import React from 'react';

//import Icons
import IconHistory from '../../assets/images/IconHistory.svg';
import IconHome from '../../assets/images/IconHome.svg';
import IconSaved from '../../assets/images/IconSaved.svg';
import IconTrending from '../../assets/images/IconTrending.svg';

function Route({ isExpended }) {
  //menu of sidebar
  const menuItems = [
    {
      text: 'Home',
      icon: IconHome,
      state: false,
      ref: '/home',
      color: '#CAAEE9',
      box: 'xl',
    },
    {
      text: 'Trending',
      icon: IconTrending,
      state: true,
      ref: '/trending',
      color: 'transparent',
      box: 'none',
      left: '4',
    },
    {
      text: 'History',
      icon: IconHistory,
      state: true,
      ref: '/history',
      color: 'transparent',
      box: 'none',
    },
    {
      text: 'Saved',
      icon: IconSaved,
      state: true,
      ref: '/save',
      color: 'transparent',
      box: 'none',
    },
  ];

  return (
    <div className="pt-[40px]">
      {menuItems.map(({ text, icon, state, ref, color, box, left }) => (
        <div key={text}>
          {!isExpended ? (
            <div className={`flex justify-center items-center ml-8 w-[192px] h-11 mt-[20px] rounded-full bg-[${color}] shadow-${box} ${box}==='xl' ? shadow-black : shadow-none`}>
              <img className={`mr-[14px] mb-[4px] ml-${left}`} src={icon} alt={text} />
              <a
                href={ref}
                className={`text-${state ? 'gray' : 'black'} ${state ? 'pointer-events-none' : 'pointer-events-auto'} text-base`}
              >
                {text}
              </a>
            </div>
          ) : (
            <div className={`flex justify-center items-center w-full h-11 mt-[20px] bg-[${color}]`}>
              <img className="" src={icon} alt={text} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Route;
