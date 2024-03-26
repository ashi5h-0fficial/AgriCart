import "./Products.scss";
import Product from "./PopularProduct/Product";

const Products = () => {
    return (
        <div className="products-container">
            <div className="sec-heading">Popular Products</div>
            <div className="products">        
                <Product/>

            </div>
        </div>
    );
};

export default Products;
