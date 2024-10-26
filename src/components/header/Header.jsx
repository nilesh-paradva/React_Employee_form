import Logo_1 from "../../assets/images/logo/logo-2.png"
import Logo_3 from "../../assets/images/logo/logo-3.png"

const Header = () => {
    return(
        <>
            <header className="pt-3">
                <div className="container">
                    <div className="flex items-center justify-between p-3">
                        <div className="w-3/12">
                            <div className="logo">
                                <a href="#">
                                    <img src={Logo_1} alt="" className="w-3/12 inline-block animate-pulse hover:animate-none"/>
                                </a>
                            </div>
                        </div>
                        <div className="w-6/12">
                            <div className="heading text-center">
                                <h1 className="h1 inline-block border-2 p-3 rounded-xl">Employee Alication</h1>
                            </div>
                        </div>
                        <div className="w-3/12">
                            <div className=" text-end">
                                <a href="#"><img src={Logo_3} alt="" className="w-2/12 inline-block animate-pulse hover:animate-none"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;