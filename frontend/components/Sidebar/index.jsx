import { useState } from "react";

// import components
import Bottom from "./Bottom";
import Upper from "./Upper";

function Sidebar() {

    //usestate
    const [sidebarWidth, setSidebarWidth] = useState('min-w-[300px]');

    //function handle expended change
    const handleExpendedChange = (isExpended) => {
        if (isExpended) {
            setSidebarWidth('min-w-[56px]');
        } else {
            setSidebarWidth('min-w-[300px]');
        }
    };

    return ( 
        <div className={`transitionPrimary h-[85vh] fontSideBar relative ${sidebarWidth} border-r border-gray-300`}>
            {/* handle event sidebar close/open */}
            <Upper onExpendedChange={handleExpendedChange} />
            {sidebarWidth === 'min-w-[56px]' ? <Bottom /> : <Bottom isExpended={true} />} 
        </div>
    );
}

export default Sidebar;
