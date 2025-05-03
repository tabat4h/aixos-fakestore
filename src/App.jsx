// import './App.css'
//  import productlist from './components/productlist'


// function App() {
//   const [count, setCount] = useState(0)

//    return (
//        <div>
//         <h1>catalogo fakestore</h1>
//         <productlist/>
//        </div>
//   )
//  }
import './App.css'
import { ProductList } from './components/ProductList'

function App() {
  return (
    <div>
      <h1>Catálogo FakeStore</h1>
      <ProductList />
    </div>
  )
}

export default App