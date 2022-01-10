import './App.css';
import data from "./products/data";
import Header from "./components/Header/Header";
import {useState} from "react";
import BucketProductList from "./components/Main/bucketProductList";

function App() {
  const [products] = useState(data)
  const [bucketProducts, setBuckedProducts] = useState([])

function addToBucket (product){
    const bucketProductList = [...bucketProducts]
  const productShow = bucketProductList.find(function (bucketProduct){
    return bucketProduct.name === product.name
  })
  if(productShow === undefined){
    const newBucketProduct = {
      id:product.id,
      name:product.name,
      price:product.price,
      quantity:1
    }
    bucketProductList.push(newBucketProduct)
  }else{
    productShow.quantity++
  }
  setBuckedProducts(bucketProductList)
}

function removeFromBucket(product){
    let bucketProductsList = [...bucketProducts]
  const productShow = bucketProductsList.find(function (bucketProduct){
    return bucketProduct.name === product.name
  })
  productShow.quantity--
  if (productShow.quantity===0){
    bucketProductsList = bucketProductsList.filter(function (bucketProduct){
      return bucketProduct.quantity >0
    })
  }
  setBuckedProducts(bucketProductsList)
}

function price(){
    let total = 0
  for(const product of bucketProducts){
    total = product.price * product.quantity
  }
  return total.toFixed(2)
}
  return (
    <body>
        <Header products={products} addToBucket={addToBucket} />
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <BucketProductList bucketProducts={bucketProducts} addToBucket={addToBucket} removeFromBucket={removeFromBucket}/>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">{`£${price()}`}</span>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
