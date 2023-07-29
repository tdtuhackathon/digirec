import React from 'react';

// import Icons
import IconAccount from '../../assets/images/IconAccount.svg';
import IconSetting from '../../assets/images/IconSetting.svg';

function Bottom({ isExpended }) {
  const menuItems = [
    {
      text: 'Account',
      icon: IconAccount,
      top: '0',
      state: true,
      ref: '/account',
    },
    {
      text: 'Setting',
      icon: IconSetting,
      top: '24px',
      state: true,
      ref: '/setting',
    },
  ];

  return (
    <div className="absolute bottom-0 flex flex-col justify-center items-start w-full h-[128px] border-t border-gray-300">
      {menuItems.map(({ text, icon, top, state, ref }) => (
        <a
          href={ref}
          className={`flex justify-center items-center mt-[${top}] ${
            isExpended ? 'pl-[70px]' : 'pl-5'
          } text-${state ? 'gray' : 'black'} ${
            state ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
        >
          <img className="mr-4" src={icon} alt={text} />
          {isExpended && (
            <span className="text-gray-500 text-base">{text}</span>
          )}
        </a>
      ))}
    </div>
  );
}

export default Bottom;
