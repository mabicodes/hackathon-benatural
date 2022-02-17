import ProductService from "../services/ProductService";

class ProductComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            product: []
        }
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    componentDidMount(){
        fetch('/product') .then(response=> response.json())
        .then(data => this.setState({product: data}));

        ProductService.getProduct().then((response) => {
            console.log(response.data)
            this.setState({product: response.data})
        });
    }
}