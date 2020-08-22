/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import { Data } from "./data";

const SideBar = () => {
  return (
    <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">Stisla</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="index.html">St</a>
        </div>
        <ul className="sidebar-menu mb-5">
          {Data.menus.map((menu, iMenu) => {
            let comp;
            if (menu.header) {
              comp = (
                <li key={iMenu} className="menu-header">
                  {menu.name}
                </li>
              );
            } else if (menu.dropdown) {
              if (menu.active) {
                comp = (
                  <li key={iMenu} className="nav-item dropdown active">
                    <a href="#" className="nav-link has-dropdown">
                      <i className={menu.icon} />
                      <span>{menu.name}</span>
                    </a>
                    <ul className="dropdown-menu">
                      {menu.children.map((submenu, iSubmenu) => {
                        let subComp;
                        if (submenu.active) {
                          if (submenu.beep) {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <Link
                                  className="beep beep-sidebar"
                                  to={submenu.url}
                                >
                                  {submenu.name}
                                </Link>
                              </li>
                            );
                          } else {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <Link to={submenu.url}>{submenu.name}</Link>
                              </li>
                            );
                          }
                        } else if (submenu.beep) {
                          subComp = (
                            <li key={iSubmenu}>
                              <Link
                                className="beep beep-sidebar"
                                to={submenu.url}
                              >
                                {submenu.name}
                              </Link>
                            </li>
                          );
                        } else {
                          subComp = (
                            <li key={iSubmenu}>
                              <Link to={submenu.url}>{submenu.name}</Link>
                            </li>
                          );
                        }

                        return subComp;
                      })}
                    </ul>
                  </li>
                );
              } else {
                comp = (
                  <li key={iMenu} className="nav-item dropdown">
                    <a href="#" className="nav-link has-dropdown">
                      <i className={menu.icon} />
                      <span>{menu.name}</span>
                    </a>
                    <ul className="dropdown-menu">
                      {menu.children.map((submenu, iSubmenu) => {
                        let subComp;
                        if (submenu.active) {
                          if (submenu.beep) {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <Link
                                  className="beep beep-sidebar"
                                  to={submenu.url}
                                >
                                  {submenu.name}
                                </Link>
                              </li>
                            );
                          } else {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <Link to={submenu.url}>{submenu.name}</Link>
                              </li>
                            );
                          }
                        } else if (submenu.beep) {
                          subComp = (
                            <li key={iSubmenu}>
                              <Link
                                className="beep beep-sidebar"
                                to={submenu.url}
                              >
                                {submenu.name}
                              </Link>
                            </li>
                          );
                        } else {
                          subComp = (
                            <li key={iSubmenu}>
                              <Link to={submenu.url}>{submenu.name}</Link>
                            </li>
                          );
                        }

                        return subComp;
                      })}
                    </ul>
                  </li>
                );
              }
            } else if (menu.active) {
              comp = (
                <li key={iMenu} className="active">
                  <Link to={menu.url}>
                    <i className={menu.icon} />
                    <span>{menu.name}</span>
                  </Link>
                </li>
              );
            } else {
              comp = (
                <li key={iMenu}>
                  <Link to={menu.url}>
                    <i className={menu.icon} />
                    <span>{menu.name}</span>
                  </Link>
                </li>
              );
            }

            return comp;
          })}
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
