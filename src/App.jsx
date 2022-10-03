import { Box } from '@mui/material';
import { Home, Delivery, Basket, Сatalog, Orders } from './pages';
import { Routes, Route, } from "react-router-dom";
import { Footer, Header } from './components';

function App() {
  return (
    <Box className='App' sx={{ m: 0 }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/catalog" element={<Сatalog />} />

      </Routes>
      <Footer />
    </Box >

  )
}

export default App