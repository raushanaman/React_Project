import './App.css';
const App = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                <img src="https://m.media-amazon.com/images/I/51Iy5h5rqgL.jpg" alt="logo" className="app-logo"/>
            </div>
            <ul className="nav-links">
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="">About</a></li>
                <li><a href="Contact">Contact</a></li>
            </ul>
            <button className="btn">Login</button>
        </nav>
        <div className="main-container">
            <div className="content">
                <h1>Welcome to World's Top Brand Nike</h1>
                <p>Discover the latest in sportswear and footwear. Shop now for exclusive deals and offers.</p>
                <div className="btn-class">
                <button className="shop-btn">Shop Now</button>
                <button className="shop-btn">Category</button>
                </div>
            </div>
            <div className="image-container">
                <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/n/c/z/-original-imagudcghwwpcuu5.jpeg?q=90&crop=false" alt="Nike" className="main-image"/>
                </div>
        </div>
    </div>
  );
}
export default App;