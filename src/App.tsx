import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { MainLayout } from "./layouts/MainLayout"
import { CartPage } from "./pages/CartPage"
import { CheckoutPage } from "./pages/CheckoutPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="cart" element={<CartPage/>} />
          <Route path="checkout" element={<CheckoutPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
