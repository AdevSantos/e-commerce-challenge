import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "container/home";
import Cart from "container/cart";
import Empty from "container/cart/empty";
import BuySuccess from "container/cart/buySuccess";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/buy-success" element={<BuySuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
