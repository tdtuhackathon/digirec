import IconSearch from '../../assets/images/IconSearch.svg'

function SearchBar() {
    return (
        <div className="relative mx-2">
            <input className="w-[600px] h-12 border-solid border border-white rounded-full bg-[#F4F6FA] shadow-lg shadow-[#F4F6FA]-500/50" type="text"/>
                <img className="absolute left-[5%] top-[20px] w-4" src={IconSearch} alt="#Search" />
                <span className="absolute left-[10%] top-[14px] text-[#C8CDD5]">Find any product?</span>
        </div>
    );
}

export default SearchBar;