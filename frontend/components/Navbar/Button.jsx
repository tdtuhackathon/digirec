function Button() {
    return ( 
       <div>
            <button className="w-28 h-11 rounded-full bg-black text-white border border-solid border-black hover:bg-black/80">
                LOG IN
            </button>
            <button className="mx-5 w-28 h-11 rounded-full bg-white text-black border border-solid border-black hover:bg-gray-100">
                SIGN UP
            </button>
       </div>
     );
}

export default Button;