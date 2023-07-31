import IconSearch from '../../assets/images/IconSearch.svg'

function SearchBar() {
    return (
        <div className="relative mx-2">
            <input placeholder='Find any product?' className="w-[600px] h-12 p-[24px] pl-[60px] border-solid border border-white rounded-full bg-[#F4F6FA] shadow-lg shadow-[#F4F6FA]-500/50" type="text"/>
                <img className="absolute left-[5%] top-[17px] w-4" src={IconSearch} alt="#Search" />
        </div>
    );
}

export default SearchBar;