import Container from "./Wrapper";
import { NavLink, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LocaleContext from "../../context/LocaleContext";
import { LanguageSquare, Logout, Moon, Sun1 } from "iconsax-react";

const Navbar = () => {
  const activeClassName = {
    fontWeight: "bold",
  };

  const { authUser, locale, toggleLocale, theme, toggleTheme, onLogout } =
    useContext(LocaleContext);

  if (!authUser) {
    return (
      <div className="py-3.5 bg-white dark:bg-gray-900 dark:text-white sm:px-5 transition ease-in-out shadow-xl">
        <Container>
          <div className="flex justify-between">
            <div className="flex items-center  gap-5">
              <h1 className="font-bold text-2xl">CatatIN</h1>
            </div>

            <div className="flex gap-x-2.5 items-center">
              <button
                onClick={toggleTheme}
                className="rounded-lg text-white dark:bg-yellow-500 bg-slate-900"
              >
                {theme === "dark" ? (
                  <Sun1 size="32" color="#FFFFFF" />
                ) : (
                  <Moon size="32" color="#FFFFFF" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-3.5 bg-white dark:bg-gray-900 dark:text-white sm:px-5 transition ease-in-out shadow-xl">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center  gap-5">
            <Link to="/">
              <h1 className="font-bold text-2xl">CatatIN</h1>
            </Link>
            <ul className="flex items-center gap-5">
              <li>
                <NavLink
                  to="/notes/new"
                  style={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  {locale === "id" ? "Buat Catatan" : "Create Note"}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-2.5 items-center">
            <Link to={"/archive"}>
              <button className="px-2.5 py-1.5 bg-teal-600 text-white dark:bg-teal-800 border-blue-500 rounded-lg text-dark-900 font-medium">
                {locale === "id" ? "Arsip" : "Archive"}
              </button>
            </Link>
            <button
              onClick={toggleLocale}
              className={`rounded-lg text-white ${
                locale === "id" ? "bg-blue-500" : "bg-red-500"
              }`}
            >
              <LanguageSquare size="32" color="#FFFFFF" variant="Outline" />
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-lg text-white dark:bg-yellow-500 bg-slate-900"
            >
              {theme === "dark" ? (
                <Sun1 size="32" color="#FFFFFF" />
              ) : (
                <Moon size="32" color="#FFFFFF" />
              )}
            </button>
            <button
              className="rounded-lg text-white dark:bg-violet-500 bg-violet-800"
              onClick={onLogout}
            >
              <Logout size="32" color="#FFFFFF" variant="Outline" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
