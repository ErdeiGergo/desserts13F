import { useState } from "react"


const AddToCartBtn = () => {
  
  const [count, setCount] = useState(0)

  return (
    <>
    {
        count == 0 ?
        <div className="addBtn" onClick={()=>setCount(count + 1)}>
            🛒 Add to Cart 
        </div> :
        <div className="addBtn active">
            <button onClick={()=>setCount(count - 1)}>-</button>
            {count}
            <button onClick={()=>setCount(count + 1)}>+</button>
        </div>
    }
    </>
  )
}

export default AddToCartBtn