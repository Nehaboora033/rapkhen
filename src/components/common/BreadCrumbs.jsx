import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadCrumbs_Arrow } from "../../utils/icons";

const formatTitle = (path) => {
  if (path === "/") return null;

  let title = path.replace("/", "").replace(/-/g, " ");
  title = title
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const customMap = {
    about: "About Us",
    news: 'News & Events',
    contact: "Contact Us",
  };

  return customMap[title.toLowerCase()] || title;
};

const BreadCrumbs = () => {
  const location = useLocation();
  const title = formatTitle(location.pathname);

  if (!title) return null; // hide on home

  return (
    <div className="bg-[#FF9534]">
      <div className="max-w-[1076px] sm:px-3 px-2 mx-auto">
        <div className="sm:py-[27px] py-[20px] flex justify-between">
          {/* Page Title */}
          <h1 className="font-medium sm:text-[30px] text-[20px] text-white roboto whitespace-nowrap">{title}</h1>
          {/* Breadcrumb Row */}
          <div className="flex items-center text-white mt-2 sm:text-[16px] text-[14px] sm:gap-2 gap-1 whitespace-nowrap">
            <Link to="/" className="text-[#FFEAD6] font-normal roboto">
              Home
            </Link>
            <span>
              <BreadCrumbs_Arrow />
            </span>
            <span className="roboto font-medium ">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;