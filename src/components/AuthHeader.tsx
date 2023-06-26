"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, Badge, BadgeProps, Drawer, styled } from "@mui/material";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";

function AuthHeader() {
  const [toggled, setToggled] = React.useState(false);
  const [cartToggled, setCartToggled] = React.useState(false);

  const handleNavClick = () => {
    setToggled(!toggled);
  };

  const display = toggled ? "block" : "hidden";

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 10,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const user = useAuth()?.user;
  console.log(user);

  const toggleCartDrawer = () => {
    setCartToggled(!toggled);
  };

  return (
    <header>
      <nav className="px-4 lg:px-5 py-2.5 bg-page-white shadow-lg w-full fixed z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href={"/"}>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-page-black">
              KeyCrafters
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <>
              <StyledBadge
                onClick={toggleCartDrawer}
                badgeContent={4}
                color="primary"
              >
                <AiOutlineShoppingCart
                  size={35}
                  color="#434343"
                  className="mr-3"
                />
              </StyledBadge>
              <Drawer
                anchor="right"
                open={cartToggled}
                onClose={() => setCartToggled(false)}
              >
                <div id="content" className="py-1 min-w-[20rem] px-3 flex flex-col h-full">
                  <div
                    id="cart-header"
                    className="flex items-center justify-center relative"
                  >
                    <button className="absolute left-0 self-center">
                      <AiOutlineClose color="#838383" size={35} />
                    </button>
                    <div className="font-bold text-3xl">Meu Carrinho</div>
                  </div>
                  <div
                    id="cart-products"
                    className="my-8 h-[450px] overflow-hidden"
                  >
                    <div className="flex flex-col h-[100%] justify-start overflow-auto gap-3">
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                    </div>
                  </div>
                  <button className="w-9/10 h-14 rounded-md bg-green text-white text-3xl font-bold">
                    Pagamento
                  </button>
                </div>
              </Drawer>
            </>
            {user ? (
              <Avatar
                className=""
                alt={user.displayName || "?"}
                src={
                  user.photoURL ||
                  "https://ionicframework.com/docs/img/demos/avatar.svg"
                }
              />
            ) : (
              <>
                <Link
                  href={"/auth/signin"}
                  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Log In
                </Link>
                <Link
                  href={"/auth/signup"}
                  className="text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Sign Up
                </Link>
              </>
            )}
            <button
              onClick={handleNavClick}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none  focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${display} justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2`}
            id="mobile-menu-2"
          >
            <ul
              className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
              aria-current="page"
            >
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  href={"/"}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0 dark:text-gray-400"
                  href={"/products/cateogories"}
                >
                  categories
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0 dark:text-gray-400"
                  href={"/learn"}
                >
                  learn
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0 dark:text-gray-400"
                  href={"/contact"}
                >
                  contact
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0 dark:text-gray-400"
                  href={"/about"}
                >
                  categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AuthHeader;
