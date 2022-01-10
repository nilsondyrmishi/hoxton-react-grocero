function Products(props){
    return(
        <li>
            <div className="store--item-icon">
                <img src={`./assets/icons/${props.product.id}-${props.product.name}.svg`} alt={`${props.product.name}`} />
            </div>
            <button onClick={() => props.addToBucket(props.product) }>Add to cart</button>
        </li>
    )
}
export default Products
