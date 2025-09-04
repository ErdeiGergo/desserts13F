import DessertCard from './components/DessertCard'

const App = () => {
  return (
    <div>
      <DessertCard 
        category='Cake'
        name='Chocolate Cake'
        price={10}
      />

      <DessertCard
        category='Tiramisu'
        name='Classic Tiramisu'
        price={5.5}
      />

      <DessertCard
        category='Muffin'
        name='Strawberry Muffin'
        price={2.5}
      />
    </div>
  )
}

export default App