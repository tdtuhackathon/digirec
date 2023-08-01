import LogoContainer from "./LogoContainer";
import SearchBar from "./SearchBar";
import Button from "./Button";

function Navbar({wallet}) {
    return (
        <div className="flex justify-around items-center h-[125px] w-full border-b border-solid border-gray-300">
                <LogoContainer/>
                <SearchBar/>
                <Button wallet={wallet}/>
        </div>
    );
    
}

export default Navbar;