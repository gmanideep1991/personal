import { Home, AccountCircle } from "@material-ui/icons";
import HomePage from "../home/home.js";
import ProfilePage from "../home/home.js";

const Routes = [
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Home,
    component: HomePage
  },
  {
    path: "/dashboard",
    sidebarName: "Profile",
    navbarName: "Profile",
    icon: AccountCircle,
    component: ProfilePage
  }
];

export default Routes;
