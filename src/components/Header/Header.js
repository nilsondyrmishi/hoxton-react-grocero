import ProductList from "./productList";

function Header (props){
    return(
        <header id="store">
            <h1>Grocero</h1>

            <ProductList products ={props.products} addToBucket = {props.addToBucket}/>
        </header>
    )
}

export default Header
