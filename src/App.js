import React from "react";
import "./App.css";
import { Header, Footer, Sidebar } from "./components/admin";
import EcommerceDashboard from "./pages/Dashboard/EcommerceDashboard";
import GeneralDashboard from "./pages/Dashboard/GeneralDashboard";
import DefaultLayoutPage from "./pages/Strater/DefaultLayoutPage";
import BootstrapAlert from "./pages/Strater/Bootstrap/BootstrapAlert";
import BootstrapBadge from "./pages/Strater/Bootstrap/BootstrapBadge";
import BootstrapButtons from "./pages/Strater/Bootstrap/BootstrapButtons";
import BootstrapCard from "./pages/Strater/Bootstrap/BootstrapCard";
import BootstrapCarousel from "./pages/Strater/Bootstrap/BootstrapCarousel";
import BootstrapBreadcrumb from "./pages/Strater/Bootstrap/BootstrapBreadcrumb";
import BootstrapCollapse from "./pages/Strater/Bootstrap/BootstrapCollapse";
import BootstrapDropDown from "./pages/Strater/Bootstrap/BootstrapDropDown";
import BootstrapForm from "./pages/Strater/Bootstrap/BootstrapForm";
import BootstrapListGroup from "./pages/Strater/Bootstrap/BootstrapListGroup";
import BootstrapMediaObject from "./pages/Strater/Bootstrap/BootstrapMediaObject";
import BootstrapModal from "./pages/Strater/Bootstrap/BootstrapModal";
import BootstrapNav from "./pages/Strater/Bootstrap/BootstrapNav";
import BootstrapNavbar from "./pages/Strater/Bootstrap/BootstrapNavbar";
import BootstrapPagination from "./pages/Strater/Bootstrap/BootstrapPagination";
import BootstrapProgress from "./pages/Strater/Bootstrap/BootstrapProgress";
import BootstrapTable from "./pages/Strater/Bootstrap/BootstrapTable";
import BootstrapTooltip from "./pages/Strater/Bootstrap/BootstrapTooltip";
import BootstrapTypography from "./pages/Strater/Bootstrap/BootstrapTypography";
import BootstrapPopover from "./pages/Strater/Bootstrap/BootstrapPopover";
import CompArticle from "./pages/Components/CompArticle";
import CompAvatar from "./pages/Components/CompAvatar";
import CompChatbox from "./pages/Components/CompChatbox";
import CompEmptystate from "./pages/Components/CompEmptystate";
import CompGallery from "./pages/Components/CompGallery";
import CompHero from "./pages/Components/CompHero";
import CompMultipleupload from "./pages/Components/CompMultipleupload";
import CompPricing from "./pages/Components/CompPricing";
import CompStatics from "./pages/Components/CompStatics";
import CompTab from "./pages/Components/CompTab";
import CompTable from "./pages/Components/CompTable";
import CompUser from "./pages/Components/CompUser";
import CompWizard from "./pages/Components/CompWizard";
import AdvancedRoute from "./pages/Google Maps/AdvancedRoute";
import DraggableMarker from "./pages/Google Maps/DraggableMarker";
import GeoCoding from "./pages/Google Maps/GeoCoding";
import GeoLocation from "./pages/Google Maps/GeoLocation";
import Marker from "./pages/Google Maps/Marker";
import MultipleMarker from "./pages/Google Maps/MultipleMarker";
import Route from "./pages/Google Maps/Route";
import Simple from "./pages/Google Maps/Simple";
import FormValidation from "./pages/Forms/FormValidation";
import FormEditor from "./pages/Forms/FormEditor";
import FormAdvancedform from "./pages/Forms/FormAdvancedform";
import ForgotPassword from "./pages/Pages/Auth/ForgotPassword";
import Login from "./pages/Pages/Auth/Login";
import Register from "./pages/Pages/Auth/Register";
import ResetPassword from "./pages/Pages/Auth/ResetPassword";
import Credit from "./pages/Pages/Credits";
import Error403 from "./pages/Pages/Errors/403";
import Error404 from "./pages/Pages/Errors/404";
import Error500 from "./pages/Pages/Errors/500";
import Error503 from "./pages/Pages/Errors/503";
import Activities from "./pages/Pages/Features/Activities";
import PostCreate from "./pages/Pages/Features/PostCreate";
import Posts from "./pages/Pages/Features/Posts";
import Profile from "./pages/Pages/Features/Profile";
import SettingDetail from "./pages/Pages/Features/SettingDetail";
import Settings from "./pages/Pages/Features/Settings";
import Tickets from "./pages/Pages/Features/Tickets";
import Calender from "./pages/Modules/Calender";
import Chart from "./pages/Modules/Chart";
import DataTables from "./pages/Modules/DataTables";
import Flag from "./pages/Modules/Flag";
import FontAwesome from "./pages/Modules/FontAwesome";
import IonIcons from "./pages/Modules/IonIcons";
import OwlCarousel from "./pages/Modules/OwlCarousel";
import Sparkline from "./pages/Modules/Sparkline";
import SweetAlert from "./pages/Modules/SweetAlert";
import Toastr from "./pages/Modules/Toastr";
import VectorMap from "./pages/Modules/VectorMap";
import WeatherIcon from "./pages/Modules/WeatherIcon";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />

      <Calender />
      <Chart />
      <DataTables />
      <Flag />
      <FontAwesome />
      <IonIcons />
      <OwlCarousel />
      <Sparkline />
      <SweetAlert />
      <Toastr />
      <VectorMap />
      <WeatherIcon />

      {/* 
      <ForgotPassword />
      <Login />
      <Register />
      <ResetPassword />
      <Credit />
      <Error403 />
      <Error404 />
      <Error500 />
      <Error503 />
      <Activities />
      <PostCreate />
      <Posts />
      <Profile />
      <SettingDetail />
      <Settings />
      <Tickets /> */}

      {/* <AdvancedRoute />
      <DraggableMarker />
      <GeoCoding />
      <GeoLocation />
      <Marker />
      <MultipleMarker />
      <Route />
      <Simple />
      <FormValidation />
      <FormEditor />
      <FormAdvancedform /> */}

      {/* <CompArticle />
      <CompAvatar />
      <CompChatbox />
      <CompChatbox />
      <CompEmptystate />
      <CompGallery />
      <CompHero />
      <CompMultipleupload />
      <CompPricing />
      <CompStatics />
      <CompTab />
      <CompTable />
      <CompUser />
      <CompWizard /> */}

      {/* 

      
      <BootstrapAlert />
      <BootstrapBadge />
      <BootstrapBreadcrumb />

      <BootstrapButtons />
      <BootstrapCard />

      <BootstrapCarousel />
      <BootstrapCollapse />
      <BootstrapDropDown />
      <BootstrapForm />
      <BootstrapListGroup />
      <BootstrapMediaObject />
      <BootstrapModal />
      <BootstrapNav />
      <BootstrapNavbar />
      <BootstrapPagination />
      <BootstrapPopover />
      <BootstrapProgress />
      <BootstrapTable />
      <BootstrapTooltip />
      <BootstrapTypography /> */}

      {/* <DefaultLayoutPage /> */}
      {/* <GeneralDashboard /> */}
      {/* <EcommerceDashboard /> */}
    </div>
  );
}

export default App;
