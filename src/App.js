import React from "react";
import { Switch, Route, Link } from "react-router-dom";
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
import GRoute from "./pages/Google Maps/Route";
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
      <Switch>
        <Route path="/" exact component={EcommerceDashboard} />{" "}
        <Route path="/dashboard/general" component={GeneralDashboard} />{" "}
        <Route path="/layout/default" component={DefaultLayoutPage} />{" "}
        <Route path="/bootstrap/alert" component={BootstrapAlert} />{" "}
        <Route path="/bootstrap/badge" component={BootstrapBadge} />{" "}
        <Route path="/bootstrap/breadcrumb" component={BootstrapBreadcrumb} />{" "}
        <Route path="/bootstrap/button" component={BootstrapButtons} />{" "}
        <Route path="/bootstrap/card" component={BootstrapCard} />{" "}
        <Route path="/bootstrap/carousel" component={BootstrapCarousel} />{" "}
        <Route path="/bootstrap/collapse" component={BootstrapCollapse} />{" "}
        <Route path="/bootstrap/dropdown" component={BootstrapDropDown} />{" "}
        <Route path="/bootstrap/form" component={BootstrapForm} />{" "}
        <Route path="/bootstrap/list-group" component={BootstrapListGroup} />{" "}
        <Route
          path="/bootstrap/media-object"
          component={BootstrapMediaObject}
        />{" "}
        <Route path="/bootstrap/modal" component={BootstrapModal} />{" "}
        <Route path="/bootstrap/nav" component={BootstrapNav} />{" "}
        <Route path="/bootstrap/navbar" component={BootstrapNavbar} />{" "}
        <Route path="/bootstrap/pagination" component={BootstrapPagination} />{" "}
        <Route path="/bootstrap/popover" component={BootstrapPopover} />{" "}
        <Route path="/bootstrap/Progress" component={BootstrapProgress} />{" "}
        <Route path="/bootstrap/table" component={BootstrapTable} />{" "}
        <Route path="/bootstrap/tooltip" component={BootstrapTooltip} />{" "}
        <Route path="/bootstrap/typography" component={BootstrapTypography} />{" "}
        <Route path="/component/article" component={CompArticle} />{" "}
        <Route path="/component/avatar" component={CompAvatar} />{" "}
        <Route path="/component/chat-box" component={CompChatbox} />{" "}
        <Route path="/component/empty-state" component={CompEmptystate} />{" "}
        <Route path="/component/gallery" component={CompGallery} />{" "}
        <Route path="/component/hero" component={CompHero} />{" "}
        <Route
          path="/component/multiple-upload"
          component={CompMultipleupload}
        />{" "}
        <Route path="/component/pricing" component={CompPricing} />{" "}
        <Route path="/component/statistic" component={CompStatics} />{" "}
        <Route path="/component/tab" component={CompTab} />{" "}
        <Route path="/component/table" component={CompTable} />{" "}
        <Route path="/component/user" component={CompUser} />{" "}
        <Route path="/component/wizard" component={CompWizard} />{" "}
        <Route path="/form/advance-form" component={FormAdvancedform} />{" "}
        <Route path="/form/editor" component={FormEditor} />
        <Route path="/form/validation" component={FormValidation} />{" "}
        <Route path="/google-maps/advance-route" component={AdvancedRoute} />{" "}
        <Route
          path="/google-maps/draggable-marker"
          component={DraggableMarker}
        />{" "}
        <Route path="/google-maps/geocoding" component={GeoCoding} />{" "}
        <Route path="/google-maps/geolocation" component={GeoLocation} />{" "}
        <Route path="/google-maps/marker" component={Marker} />{" "}
        <Route path="/google-maps/multiple-marker" component={MultipleMarker} />{" "}
        <Route path="/google-maps/route" component={GRoute} />{" "}
        <Route path="/google-maps/simple" component={Simple} />{" "}
        <Route path="/module/calendar" component={Calender} />{" "}
        <Route path="/module/chartjs" component={Chart} />{" "}
        <Route path="/module/datatables" component={DataTables} />{" "}
        <Route path="/module/flag" component={Flag} />{" "}
        <Route path="/module/font-awesome" component={FontAwesome} />{" "}
        <Route path="/module/ion-icons" component={IonIcons} />{" "}
        <Route path="/module/owl-carousel" component={OwlCarousel} />{" "}
        <Route path="/module/sparkline" component={Sparkline} />{" "}
        <Route path="/module/sweet-alert-2" component={SweetAlert} />{" "}
        <Route path="/module/toastr" component={Toastr} />{" "}
        <Route path="/module/vector-map" component={VectorMap} />{" "}
        <Route path="/module/weather-icons" component={WeatherIcon} />{" "}
        <Route path="/feature/activities" component={Activities} />{" "}
        <Route path="/feature/post-create" component={PostCreate} />{" "}
        <Route path="/feature/posts" component={Posts} />{" "}
        <Route path="/feature/profile" component={Profile} />{" "}
        <Route path="/feature/Settings" component={Settings} />{" "}
        <Route path="/feature/setting-detail" component={SettingDetail} />{" "}
        <Route path="/feature/tickets" component={Tickets} />{" "}
        <Route path="/credit" component={Credit} />{" "}
      </Switch>{" "}
      {/* < />
                  < />
                  < />
                  < />
                  < /> */}{" "}
      {/* <Route path="/feature/" component={} />
              <Route path="/feature/" component={} />
              <Route path="/feature/" component={} />
              <Route path="/feature/" component={} />
              <Route path="/feature/" component={} /> */}{" "}
      {/* <Calender />
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
            <WeatherIcon /> */}{" "}
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
                  <Tickets /> */}{" "}
      {/* <AdvancedRoute />
                  <DraggableMarker />
                  <GeoCoding />
                  <GeoLocation />
                  <Marker />
                  <MultipleMarker />
                  <GRoute />
                  <Simple />
                  <FormValidation />
                  <FormEditor />
                  <FormAdvancedform /> */}{" "}
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
                  <CompWizard /> */}{" "}
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
                  <BootstrapTypography /> */}{" "}
      {/* <DefaultLayoutPage /> */} {/* <GeneralDashboard /> */}{" "}
      {/* <EcommerceDashboard /> */}{" "}
    </div>
  );
}

export default App;
