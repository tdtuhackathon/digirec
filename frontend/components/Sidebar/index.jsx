import { useState } from "react";

// import components
import Bottom from "./Bottom";
import Upper from "./Upper";

function Sidebar() {

    //usestate
    const [sidebarWidth, setSidebarWidth] = useState('w-[300px]');

    //function handle expended change
    const handleExpendedChange = (isExpended) => {
        if (isExpended) {
            setSidebarWidth('w-14');
        } else {
            setSidebarWidth('w-56');
        }
    };

    return ( 
        <div className={`relative ${sidebarWidth} h-[899px] border-r border-gray-300`}>
            {/* handle event sidebar close/open */}
            <Upper onExpendedChange={handleExpendedChange} />
            {sidebarWidth === 'w-14' ? <Bottom /> : <Bottom isExpended={true} />} 
        </div>
    );
}

export default Sidebar;
