function BucketProduct(props){
    return(
        <li>
            <img
                className="cart--item-icon"
                src={`./assets/icons/${props.bucketProduct.id}-${props.bucketProduct.name}.svg`}
                alt={`${props.bucketProduct.name}`}
            />
            <p>beetroot</p>
            <button className="quantity-btn remove-btn center" onClick={() => {props.removeFromBucket(props.bucketProduct)}}>-</button>
            <span className="quantity-text center">{props.bucketProduct.quantity}</span>
            <button className="quantity-btn add-btn center" onClick={() => {props.addToBucket(props.bucketProduct)}}>+</button>
        </li>
    )
}
export default BucketProduct
