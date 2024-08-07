import { set } from "mongoose";
import AccountLink from "./AccountLink";
import ProfileIcon from "./icons/ProfileIcon";
import Layout from "./Layout";
import SettingsIcon from "./icons/SettingsIcon";
import OrdersIcon from "./icons/OrdersIcon";
import WishlistIcon from "./icons/WishListIcon";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { use } from "react";

export default function AccountLayout({ children, title }) {
  return (
    <Layout>
      <div className="p-5 w-full h-full">
        <div className="box w-full h-full flex flex-col sm:flex-row flex-grow">
          <aside className="h-full rounded-t-lg sm:rounded-l-lg sm:rounded-r-none bg-gray-200 flex justify-center sm:justify-start sm:flex-col gap-3 p-5 whitespace-nowrap">
            <AccountLink
              href="profile"
              title="Profile information"
              Icon={ProfileIcon}
            />
            <AccountLink href="wishlist" title="Wishlist" Icon={WishlistIcon} />
            <AccountLink
              href="orders"
              title="Orders history"
              Icon={OrdersIcon}
            />
            <AccountLink href="settings" title="Settings" Icon={SettingsIcon} />
          </aside>
          <div className="p-5 w-full">
            <h3>{title}</h3>
            <motion.div
              variants={fadeIn("down", "spring", 0, 1)}
              initial="hidden"
              whileInView="show"
            ></motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
