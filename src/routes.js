import Index from "views/Index.js";
import Startups from "views/pages/Startups.js";
import Investors from "views/pages/Investors.js";
import Partners from "views/pages/Partners.js";
import Tables from "views/pages/Tables.js";
import Profile from "views/pages/Profile.js";
// import Register from "views/pages/Register.js";
// import Login from "views/pages/Login.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/startups",
    name: "Startups",
    icon: "ni ni-planet text-blue",
    component: Startups,
    layout: "/admin",
  },
  {
    path: "/investors",
    name: "Investors",
    icon: "ni ni-pin-3 text-orange",
    component: Startups,
    layout: "/admin",
  },
  {
    path: "/partners",
    name: "Partners",
    icon: "ni ni-pin-3 text-orange",
    component: Partners,
    layout: "/admin",
  },
  {
    path: "/groups",
    name: "Groups",
    icon: "ni ni-pin-3 text-orange",
    component: Investors,
    layout: "/admin",
  },
  {
    path: "/contact_list",
    name: "Contact List",
    icon: "ni ni-pin-3 text-orange",
    component: Investors,
    layout: "/admin",
  },
  {
    path: "/pool_list",
    name: "Pool List",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/coupons",
    name: "Coupons",
    icon: "ni ni-pin-3 text-orange",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    icon: "ni ni-pin-3 text-orange",
    component: Tables,
    layout: "/admin",
  },
  
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;
