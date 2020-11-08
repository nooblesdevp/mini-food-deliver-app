import React from "react";
import { AiOutlineShoppingCart, AiOutlineRight } from "react-icons/ai";
import { useStateValue } from "../config/Provider";
import CurrencyFormat from "react-currency-format";
import "./Basket.css";
import { getBasketTotal } from "../config/reducer";
import { motion } from "framer-motion";

function Basket() {
  const [{ basket }, dispatch] = useStateValue();

  //efect show
  const basketVariant = {
    hidden: {
      y: "50px",
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.7,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      variants={basketVariant}
      initial="hidden"
      animate="visible"
      className="basket"
    >
      <div className="basketLeft">
        <div>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <span> {basket?.length} items</span> | {""}
                <span> {value}</span>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp"}
          />
        </div>
        <div>
          {" "}
          <span>Sudah termasuk Ongkos Kirim</span>
        </div>
      </div>
      <div className="basketRight">
        <AiOutlineShoppingCart className="basketRight__icon" />
        <AiOutlineRight className="basketRight__icon" />
      </div>
    </motion.div>
  );
}

export default Basket;
