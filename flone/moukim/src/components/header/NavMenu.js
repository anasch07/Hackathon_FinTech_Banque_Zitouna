import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
        return ( <
                div className = { ` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            {/* <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["home"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link> */}
            
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["home"]}
            </Link>
         
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {strings["shop"]}
              {
                <span>
                  <i className="fa fa-angle-down"></i>
                </span>
              }
            </Link>
            <ul className="submenu">
              <li>
                <ul>
    
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {
                        strings["Tamouil_Sayara"]
                      }
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {
                        strings["Tamouil_Menzel"]
                      }
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {
                        strings["Tamouil_Rahalet"]
                      }
                    </Link>
                  </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                          {
                            strings["Tamouil_Khadamet_Sehheya"]
                          }
                        </Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                          {
                            strings["Tamouil_Mochtarayet"]
                          }
                        </Link>
                      </li>
                  
                 
                </ul>
              </li>
             
            </ul>
          </li>
          
          






          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["pages"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                  {strings["cart"]}
                </Link>
              </li>
            
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                  {strings["wishlist"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                  {strings["compare"]}
                </Link>
              </li>
            
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {strings["login_register"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {strings["about_us"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                  {strings["contact_us"]}
                </Link>
              </li>
            
            </ul>
          </li>
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
              {strings["blog"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  {strings["blog_standard"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                  {strings["blog_no_sidebar"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                  {strings["blog_right_sidebar"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  {strings["blog_details_standard"]}
                </Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
          <li>
            < Link to = {
              process.env.PUBLIC_URL + "/login-register"
            } >
              {
                strings["login-register"]
              }
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);