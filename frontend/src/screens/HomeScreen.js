import './HomeScreen.css';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
    <div className="home-screen">
        <h2 className="home-screen_title">Latest Products</h2>
        <div className="home-screen_products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
    )
}

export default HomeScreen
