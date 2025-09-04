import AddToCartBtn from './AddToCartBtn'

type Dessert = {
    name: string;
    img?: string;
    category: string;
    price: number;
}

const DessertCard = (proops: Dessert) => {
  return (
    <div className='dessertCard'>
        <img src={proops.img} alt="" />
        <AddToCartBtn/>        
        <h2 className='category'>{proops.category}</h2>
        <h1 className='dessertName'>{proops.name}</h1>
        <h3 className='price'>${proops.price}</h3>
    </div>
  )
}

export default DessertCard