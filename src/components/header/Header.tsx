import { NavLink } from "react-router-dom";
import Btn from "../btn/Btn";
import { LuUser2 } from "react-icons/lu";
import { BiStoreAlt } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { VscListSelection } from "react-icons/vsc";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-20 px-4 lg:px-8 lg:max-w-7xl lg:m-auto">
        <NavLink to={"/"} className="flex items-center justify-between gap-2">
          <BiStoreAlt className="text-purple-500 text-4xl" />
          <span className=" text-xl">NFT MarketPlace</span>
        </NavLink>
        <nav className="hidden lg:flex lg:items-center lg:gap-12">
          <NavLink to="/">Marketplace</NavLink>
          <NavLink to="/">Ranking</NavLink>
          <NavLink to="/">Connect a wallet</NavLink>
          <Btn leftIcon={<LuUser2 />} label="sign up" variant="outline" />
        </nav>
        {openMenu ? (
          <LiaTimesSolid
            size={28}
            className="lg:hidden"
            onClick={() => {
              setOpenMenu(openMenu => !openMenu);
            }}
          />
        ) : (
          <VscListSelection
            size={28}
            className="lg:hidden"
            onClick={() => {
              setOpenMenu(openMenu => !openMenu);
            }}
          />
        )}
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.nav
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "ease-in-out", duration: 0.25 }}
            exit={{ opacity: 0, y: "-100vh" }}
            className="fixed top-20 left-0 right-0 flex flex-col items-start gap-4 lg:hidden mt-4 p-8 bg-neutral-900 rounded-3xl">
            <NavLink to="/">Marketplace</NavLink>
            <NavLink to="/">Ranking</NavLink>
            <NavLink to="/">Connect a wallet</NavLink>
            <Btn leftIcon={<LuUser2 />} label="sign up" variant="outline" />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
