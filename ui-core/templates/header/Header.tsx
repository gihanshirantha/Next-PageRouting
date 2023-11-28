import React, { useContext } from "react";
import { SignInButton, UserButton, useAuth, useUser } from "@clerk/clerk-react";
import {} from "@clerk/clerk-react";
import { Button, DrawerPortal } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
} from "../../components";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components";
import CartItem from "../../components/organisms/cartItem/CartItem";
import { useCart } from "../../../context/CartContext";
import Link from "next/link";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  const { cart, clearCart, total, itemAmount } = useCart();
  const isDisabled = itemAmount > 0 ? false : true;

  return (
    <header
      className={`bg-header h-[84px] py-4 shadow-md z-10
       fixed w-full transition-all flex  items-center justify-between`}
    >
      <div></div>
      <div>
        <Link href={"/"}>
          {" "}
          <h1 className="text-3xl ml- font-bold text-center">Modern Walk</h1>
        </Link>
      </div>
      <div className="mr-12 flex items-center ">
        {!userId && (
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
        )}
        {userId && <p>Hello {user?.firstName}</p>}

        <Drawer>
          <DrawerTrigger asChild>
            <div className="flex flex-row ">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="ml-8  mr-8 p-2  
                     cursor-pointer hover:bg-primary-inverse hover:text-primary-hover active:bg-white transition rounded-lg active:scale-[.95]"
              />

              {itemAmount > 0 ? (
                <div className="bg-primary absolute right-[4.6rem] top-5  text-[14px] w-[20px] h-[20px] rounded-full flex justify-center items-center font-semibold text-white">
                  {itemAmount}
                </div>
              ) : (
                ""
              )}
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Item Cart</DrawerTitle>
              <div className="border-b"></div>
            </DrawerHeader>
            <div className="flex flex-col gap-y-2 h-[520px] lg:h-[520px] xl:h-[730px] overflow-y-auto overflow-x-hidden border-b">
              {cart.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </div>
            <DrawerTitle className="px-8 py-4">
              Total Price :<span className="text-primary"> $ {total}</span>
            </DrawerTitle>
            <DrawerFooter>
              <div className=" flex gap-2 pl-8">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant="outline" size="lg" disabled={isDisabled}>
                      Clear Cart
                    </Button>

                    {/* Alert Box */}
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Clear Cart</AlertDialogTitle>
                      <AlertDialogDescription>
                        All the items in your cart will be removed! Please
                        confirm to proceed.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => clearCart()}>
                        Confirm
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Button disabled={isDisabled} type="submit" size="lg">
                  Checkout
                </Button>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Header;
