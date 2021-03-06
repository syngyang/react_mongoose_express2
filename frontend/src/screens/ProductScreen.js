import './ProductScreen.css'



const ProductScreen = () => {
    return (
        <div className="product-screen">
           <div className="product-screen_left">
               <div className="left_img">
                   <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
               </div>
               <div className="left_info">
                   <p className="left_name">Product 1</p>
                   <p>Price: $399.99</p>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in molestiae pariatur provident perspiciatis iure.</p>
               </div>
           </div> 
           <div className="product-screen_right">
            <div className="right_info">
                <p>
                    Price: <span>$399.00</span>
                </p>
                <p>
                    Status: <span>In Stock</span>
                </p>
                <p>
                    Q'ty 
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </p>
                <p>
                    <button type="button" >Add To Cart</button>
                </p>
            </div>
           </div>
        </div>
        
    )
}

export default ProductScreen
