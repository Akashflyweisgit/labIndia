/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./AdminPanel/components/Login/Login";
import { useEffect } from "react";
import MainDashBord from "./AdminPanel/components/Dashbord/MainHome";
import TradingHome from "./AdminPanel/components/Trading'/TradingHome";
import EditTradingPost from "./AdminPanel/components/Trading'/EditTradingPost";
import AddTrading from "./AdminPanel/components/Trading'/AddTrading";
import AllUsers from "./AdminPanel/components/Users/AllUsers";
import SubPlane from "./AdminPanel/components/Subscriber/SubPlane";
import EditTrading from "./AdminPanel/components/Subscriber/EditPlane";
import ViewUserDetails from "./AdminPanel/components/Users/ViewUserDetails";
import PostHome from "./AdminPanel/components/Posts/AddPostHome";
import PostListHome from "./AdminPanel/components/Posts/PostListHome";
import EditPost from "./AdminPanel/components/Posts/EditPost";
import ViewSinglePost from "./AdminPanel/components/Posts/ViewSinglePost";
import Categories from "./AdminPanel/components/Categories/Categories";
import Addcategories from "./AdminPanel/components/Categories/Addcategories";
import Editcategories from "./AdminPanel/components/Categories/Editcategories";
import AllSubscriber from "./AdminPanel/components/Subscriber/AllSubscriber";
import ViewSubDetails from "./AdminPanel/components/Subscriber/ViewSubDetails";
import LeatestRealese from "./AdminPanel/components/LeatestRelease/LeatestRealese";
import Edit from "./AdminPanel/components/LeatestRelease/Edit";
import AddLeatestPost from "./AdminPanel/components/LeatestRelease/AddLeatestPost";
import ForgotPassword from "./AdminPanel/components/ForgetPassword/ForgotPassword";
import OPTpage from "./AdminPanel/components/ForgetPassword/OTPpage";
import EnterPassword from "./AdminPanel/components/ForgetPassword/NewPassword";
import ManageAdd from "./AdminPanel/Pages/AdManager/ManageAdd";
import AddStory from "./AdminPanel/components/addStory/AddStory";
import Stories from "./AdminPanel/components/viewStory/Stories";
import ViewStory from "./AdminPanel/components/viewStory/ViewStory";
import UpdateStory from "./AdminPanel/components/viewStory/UpdateStory";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        {/* <-----------------Admin-Panel------------------>  */}
        <Route path="/" element={<Login />} />
        <Route path="/dashbord" element={<MainDashBord />} />
        <Route path="/trading" element={<TradingHome />} />
        <Route path="/edit-trading" element={<EditTradingPost />} />
        <Route path="/add-trading" element={<AddTrading />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/subscriber" element={<AllSubscriber />} />
        <Route path="/plane" element={<SubPlane />} />
        <Route path="/edit-plane" element={<EditTrading />} />
        <Route path="/view-user-Details" element={<ViewUserDetails />} />
        <Route path="/add-posts" element={<PostHome />} />
        <Route path="/post-list" element={<PostListHome />} />
        <Route path="/edit-posts" element={<EditPost />} />
        <Route path="/view-posts-details" element={<ViewSinglePost />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add-categories" element={<Addcategories />} />
        <Route path="/edit-categories" element={<Editcategories />} />
        <Route path="/view-single-sub" element={<ViewSubDetails />} />
        <Route path="/leatest-post" element={<LeatestRealese />} />
        <Route path="/edit-leatest-release" element={<Edit />} />
        <Route path="/add-leatest-release" element={<AddLeatestPost />} />
        <Route path="/manage-ads" element={<ManageAdd />} />
        <Route path="/add-story" element={<AddStory />} />
        <Route path="/view-stories" element={<Stories />} />
        <Route path="/view-story" element={<ViewStory />} />
        <Route path="/update-story" element={<UpdateStory />} />

        {/* Password reset page */}
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OPTpage />} />
        <Route path="/newpassword" element={<EnterPassword />} />
      </Routes>
    </>
  );
}

export default App;
