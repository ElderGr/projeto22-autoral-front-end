import { AiFillPlusCircle } from "react-icons/ai";

function ProductCard() {
  return (
    <div
      id="product-card"
      className="w-36 max-w-[20rem] h-52 bg-page-white flex flex-col items-center rounded-xl"
    >
      <div className="h-[70%] w-full bg-page-white border border-grey-400 rounded-t-xl flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXr4iibJaXDEpd9VXEOyzJ3cUboLwO3ANwBj5J8XzK_o6Re262eRhk9EYJRXk5KHt5xQ&usqp=CAU"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="flex px-1 py-2 w-full items-center justify-between">
        <div className="flex items- justify-center flex-col">
          <div className="font-bold page-black">R$50</div>
          <div className="text-sm whitespace-nowrap">100 vendidos</div>
        </div>
        <div className="h-full min-w-[27px] max-w-[37px] bg-yellow-600 rounded-lg flex items-center text-center mb-[6px] justify-center">
        +
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
