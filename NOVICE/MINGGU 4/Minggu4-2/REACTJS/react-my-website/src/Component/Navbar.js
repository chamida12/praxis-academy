function Navbar(props){ //Memanggil Props dengan cara memasukan props pada parameter
   
    return (
        <div>
            <h1>{props.navHeading}</h1>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Profil</a>
                </li>
                <li>
                    <a href="#"> Contact</a>
                </li>
                <li>
                    <a href="#"> {props.navText}</a>
                    {/* cara memanggil props dari variable App */}
                </li>
            </ul>
        </div>

        )
}


export default Navbar;