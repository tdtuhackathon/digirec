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
      ref: '/',
      color: '#CAAEE9',
      box: 'md',
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
    <div className="transitionPrimary flex justify-center items-center flex-col pt-[40px]">
      {menuItems.map(({ text, icon, state, ref, color, box, left }) => (
        <div className='transitionPrimary w-full flex justify-center items-center' key={text}>
          {!isExpended ? (
            <div className={`transitionPrimary flex justify-center items-center w-[200px] h-12 mt-[20px] rounded-full bg-[${color}] shadow-${box} ${box === 'md' ? "shadow-black/50" : "shadow-none"}`}>
              <img className={`transitionPrimary mr-[14px] mb-[4px] ml-${left}`} src={icon} alt={text} />
              <a
                href={ref}
                className={`fontSideBar transitionPrimary text-[22px] text-${state ? '[#b3b8c1]' : 'black'} ${state ? 'pointer-events-none' : 'pointer-events-auto'} hover:no-underline`}
              >
                {text}
              </a>
            </div>
          ) : (
            <div className={`transitionPrimary flex justify-center items-center w-full h-11 mt-[20px] bg-[${color}]`}>
              <img className="" src={icon} alt={text} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Route;
