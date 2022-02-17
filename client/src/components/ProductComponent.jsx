import React from "react";
import axios from "axios";
const PRODUCTS_REST_API_URL = "http://localhost:8080/api/products";


class ProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
        axios.get(PRODUCTS_REST_API_URL).then(resp => {this.setState({products:resp.data})});
    }
    render(){

        console.log(this.state.products)

        return(
                <div>
                    {this.state.products.map(
                            product => 
                            <div key = {product.id}>
                               <img src={product.productImg} alt="hola" />
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