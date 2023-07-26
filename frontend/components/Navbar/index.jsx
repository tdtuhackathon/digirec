import LogoContainer from "./LogoContainer";
import SearchBar from "./SearchBar";
import Button from "./Button";

function Navbar() {
    return (
        <div className="flex justify-around items-center h-24 w-full border-b border-solid border-gray-300">
                <LogoContainer/>
                <SearchBar/>
                <Button/>
        </div>
    );
    
}

export default Navbar;