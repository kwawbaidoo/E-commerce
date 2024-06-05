const Navigation = () =>{
    return(
        <div className="w-full">
            <div className="flex md:max-w-[1170px] xl:max-w-[1170px]">
                <span className="flex justify-between">
                    <h3>Exclusive</h3>

                    <ul className="flex gap-12">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Sign Up</a>
                        </li>
                    </ul>
                </span>
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Navigation;