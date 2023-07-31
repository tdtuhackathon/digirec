



// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign



function Button({ wallet }) {
    console.log(wallet)

    const handleSignOut = () => {
        // Your sign-out logic here
        wallet.signOut();
    };

    const handleSignUp = () => {
        // Your sign-up logic here
        wallet.signIn();
    };
    return (
        <div>
            <button className="w-28 h-11 rounded-full bg-black text-white border border-solid border-black" onClick={handleSignOut }>
                SIGN OUT
            </button>
            <button className="mx-5 w-28 h-11 rounded-full bg-white text-black border border-solid border-black " onClick={handleSignUp} >
                SIGN UP

            </button>
        </div>
    );
}




export default Button;