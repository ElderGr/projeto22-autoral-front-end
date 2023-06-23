import React, { PropsWithChildren } from "react";

type ProductListProps = {
    name?: string
}

function ProductList({children, name}:PropsWithChildren<ProductListProps>) {
  return (
    <div className="px-5 w-full block overflow-hidden h-64">
      <div className="py-4 font-bold text-xl">{name || "Produtos"}</div>
      <div className="flex overflow-x-scroll overflow-y-hidden gap-2">
        {children}
      </div>
    </div>
  );
}

export default ProductList;
