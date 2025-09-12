import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { capitalizeWords, Navlinks } from "../../utils/helper";
import { ToggleButton } from "../../utils/icons";
import Hamburger from "hamburger-react";
import Container from "./Container";
import BreadCrumbs from "./BreadCrumbs";

const Header = () => {
  const [state, setIsOpen] = useState(null);
  return (
    <>
      <div className={``}>
        <Container>
          {/* main nav bar */}
          <div className="flex items-center justify-between sm:py-[35px] py-[25px] bg-white">
            <Link to={"/"} className="font-semibold text-[24px]">
              Rapkhen
            </Link>
            <nav
              className={`flex gap-[40px] max-lg:flex-col max-lg:items-center z-[10] max-lg:justify-center transition-[right] max-lg:top-0 duration-800 ease-in-out max-sm:w-full max-lg:w-[75%] max-lg:fixed  max-lg:h-full max-lg:bg-white ${state === "show" ? "right-0" : "max-lg:right-[-100%]"
                }`}
            >
              {Navlinks.map((items, index) => (
                <NavLink
                  key={index}
                  to={items.path}
                  onClick={() => setIsOpen(null)}
                  className={({ isActive }) =>
                    `whitespace-nowrap ${isActive
                      ? "text-[#FF9534] font-semibold text-[20px]"
                      : "text-[20px] font-normal"
                    }`
                  }
                >
                  {capitalizeWords(items.label)}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-2 ">
              <button className="border-[#F3F3F3] border-[6px] rounded-full cursor-pointer">
                <ToggleButton />
              </button>
              <button
                aria-label="Toggle navigation menu"
                className="lg:hidden block z-[11]"
                onClick={() => setIsOpen(state === "show" ? null : "show")}
              >
                <Hamburger
                  toggled={state === "show"}
                  toggle={() => setIsOpen(state === "show" ? null : "show")}
                />
              </button>
            </div>
          </div>
        </Container>
      </div>
      {/* orange sub header (not on home) */}
      <BreadCrumbs />
    </>
  );
};

export default Header;