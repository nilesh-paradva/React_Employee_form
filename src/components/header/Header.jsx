const Header = () => {
    return(
        <>
            <header>
                <div className="container">
                    <div className="row items-center justify-between p-3 bg-green-700">
                        <div className="w-2/12">
                            <div className="logo">
                                <i className="fa-solid fa-house text-2xl cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="w-10/12 flex justify-end">
                            <div className="button flex items-center">
                                <div className="user">
                                    <i className="fa-solid fa-user pe-3 text-2xl cursor-pointer"></i>
                                </div>
                                <div className="user-name">
                                    <p className="text-white text-2xl font-sans">Employee Management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;