import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function CartItem() {
  return (
    <div
      id="cart-item"
      className="w-full border-b border-b-1px border-b-grey-500"
    >
      <div className="flex w-full overflow-hidden relative">
        <img className="bg-grey-500 w-20 h-20" src="" alt="" />
        <div className="px-2 overflow-hidden">
          <div>Thats the item title</div>
          <div className="text-lg font-bold">R$ {(2342).toFixed(2)}</div>
          <div className="flex items-center justify-between w-20">
            <button>
              <AiOutlineMinusCircle />
            </button>
            <input className="w-3" type="text" defaultValue={1} />
            <button>
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>
        <div className="absolute right-0">X</div>
      </div>
    </div>
  );
}

export default CartItem;
