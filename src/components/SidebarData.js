import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { IoIosAnalytics } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { TbFriends } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";

export const SidebarData = [
    {
        title: "Home",
        icon: <FaHome />,
        link: "/home"
    },
    {
        title: "Analytics",
        icon: <IoIosAnalytics />,
        link: "/analytics"
    },
    {
        title: "Dashboard",
        icon: <MdOutlineDashboard />,
        link: "/dashboard"
    },
    {
        title: "Mailbox",
        icon: <MdOutlineMarkunreadMailbox />,
        link: "/mailbox"
    },
    {
        title: "Friends",
        icon: <TbFriends />,
        link: "/friends"
    },
    {
        title: "Images",
        icon: <CiImageOn />,
        link: "/images"
    },
];
