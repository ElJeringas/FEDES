import React from 'react'
import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import logo from '../../assets/Fedes_logo.png'
// * React icons
import { VscDashboard } from "react-icons/vsc";
import { FaPowerOff } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

const SideBar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Ejec. Presupuestaria",
      icon: VscDashboard,
      menus: ["Valores Presupuestados", "Valores Ejecutados"],
      route:["BudgetedValues", "ExecutedValues"],
    },
/*     {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    }, */
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] fixed top-0 bottom-0 left-0 h-screen overflow-hidden"

      >
<div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">
  <img src={logo} width={45} alt="" />
  <div className="flex flex-col">
    <span className="text-xl">Fedes</span>
  </div>
</div>



        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"} className="link">
                <FaChartBar size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
{/*             <li>
              <NavLink to={"/stroage"} className="link">
                <HiOutlineDatabase size={23} className="min-w-max" />
                Stroage
              </NavLink>
            </li> */}

            {(
              <div className="border-y py-5 border-slate-300 ">
              {(open || isTabletMid) && <small className="pl-3 text-slate-500 inline-block mb-2">
                  Categorias
                </small>}
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1 " >
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink to={"/notifications"} className="link">
                <IoIosNotifications size={23} className="min-w-max" />
                Notificaciones
              </NavLink>
            </li>
            <li>
              <NavLink to={"/settings"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Configuraciones
              </NavLink>
            </li>
        </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Cerrar sesión</p>
                  <small>de Usuario</small>
                </div>
                <button className="text-red-500 py-1.5 px-3 text-xs bg-red-50 rounded-xl hover:bg-red-100">
                  Salir
                </button>
              </div>
            </div>
          )}
          
          {(!open || !isTabletMid) && (<ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 ">
          <button className='flex content-center items-center text-red-500 py-2 px-2 text-md bg-red-50 rounded-xl hover:bg-red-100'><FaPowerOff size={15} className="min-w-max"/></button>
          </ul>)}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  )
}

export default SideBar