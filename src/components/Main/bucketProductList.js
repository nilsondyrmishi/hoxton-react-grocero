import BucketProduct from "./bucketProduct";
function BucketProductList(props){
    return(
        <ul className="item-list cart--item-list">
            {props.bucketProducts.map((bucketProduct) => (
                <BucketProduct
                    bucketProduct={bucketProduct}
                    key={`item-${bucketProduct.id}`}
                    addToBucket={props.addToBucket}
                    removeFromBucket={props.removeFromBucket}
                />
            ))}
        </ul>
    )
}
export default BucketProductList
