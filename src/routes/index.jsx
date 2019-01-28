import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import AuthComponent from "views/AuthPages/AuthPage.jsx";
import Dashboard from "../views/DashboardPages/Dashboard";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/auth", name: "AuthComponent", component: AuthComponent },
  { path: "/dashboard", name: "DashboardComponent", component: Dashboard },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
