const Navigation = () => {
    return (
       <nav>
            <div className="logo">
                <img src="https://m.media-amazon.com/images/I/51Iy5h5rqgL.jpg" alt="logo" className="app-logo"/>
            </div>
            <ul className="nav-links">
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="">About</a></li>
                <li><a href="Contac">Contact</a></li>
            </ul>
            <button className="btn">Login</button>
        </nav>
    );
    };
export default Navigation;