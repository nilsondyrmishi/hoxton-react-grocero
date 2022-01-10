import Products from "./products";
function ProductList(props){
    return(
        <ul className="item-list store--item-list">
            {props.products.map((product) => (
                <Products product={product} key={`product-${product.id}`} addToBucket={props.addToBucket}/>
            ))}
        </ul>
    )
}
export default ProductList
