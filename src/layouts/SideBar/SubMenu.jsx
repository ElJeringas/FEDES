import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({data}) => {
    const { pathname } = useLocation();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const renderIcon = (iconComponent, size) => {
      const Icon = iconComponent;
      return <Icon size={size} className="min-w-max" />;
    };
  
  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        //className={`flex h-0 flex-col pl-4 text-[0.8rem] font-normal overflow-hidden ${subMenuOpen ? "flex h-0 flex-col pl-0 text-[0.8rem] font-normal overflow-hidden" : "hidden"}`}
        className="flex h-0 flex-col pl-0 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.route?.map((route,index) => (
          <li key={route} >
            <NavLink
              to={`/${route}`}
              className="link !bg-transparent capitalize"
            >
              {renderIcon(data.iconList[index], 23)}
              {data.menus[index]}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  )
}

export default SubMenu