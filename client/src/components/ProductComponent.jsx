import React from "react";
import axios from "axios";


class ProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
        console.log(axios.get("http://localhost:8080/api/products"))
    }
    render(){
        return(
                <div>
                    {
                        this.state.products.map(
                            product => 
                            <div key = {product.id}>
                                <img>{product.productImg}</img>
                            <div className="card-content">
                            <p>{product.id}</p>  
                            <h3>{product.productName}</h3>
                            <p>{product.productDescription}</p>
                            </div>
                            <div className="card-footer">
                            <p>{product.productCategory}</p>
                            <p>{product.productPrice}</p>
                            </div> 
                            </div>
                        )}
                </div>
        )
    } 
}
    
export default ProductComponent