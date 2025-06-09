import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Home from "./Components/Pages/Home";
import Booking from "./Components/Pages/Booking";
import Admin from "./Components/Pages/Admin";
import Signin from "./Components/Auth/Signin";
import Footer from "./Components/Pages/Footer";
import Destination from "./Components/Pages/Destination";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import UserDetail from "./Components/Pages/UserDetail";
import BlogInDetails from "./Components/Pages/BlogInDetails";
import ChangePass from "./Components/Auth/ChangePass";
import UpdateBlog from "./Components/Admin/UpdateBlog";
import CreateBlog from "./Components/Admin/CreateBlog";
import BlogInAdmin from "./Components/Admin/BlogInAdmin";
import AddNewPlace from "./Components/Admin/AddNewPlace";
import PlanInAdmin from "./Components/Admin/PlanInAdmin";
import UpdatePlace from "./Components/Admin/UpdatePlace";
import BookingUpdate from "./Components/Pages/BookingUpdate";
import BookOrder from "./Components/Admin/BookOrder";
// import PrivateRoute from "./Components/ProtectRoute"
import { Slide, ToastContainer } from "react-toastify";
import PageNot from "./Components/PageNot";
import { PrivateRoute } from "./Components/ProtectRoute";

const App = () => {
  let admin = localStorage.getItem("email");

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route
          path="/userDetail"
          element={
            <PrivateRoute>
              <UserDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/booking"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNot/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogInAdmin" element={<BlogInAdmin />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/blogInDetail/:id" element={<BlogInDetails />} />
        <Route path="/updateBlog/:id" element={<UpdateBlog />} />
        <Route path="/addNewPlace" element={<AddNewPlace />} />
        <Route path="/planInAdmin" element={<PlanInAdmin />} />
        <Route path="/updatePlace/:id" element={<UpdatePlace />} />
        <Route path="/bookingUpdate/:id" element={<BookingUpdate />} />
        <Route path="/bookOrder" element={<BookOrder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/changePass" element={<ChangePass />} />

        {admin == "arpitshakya9956@gmail.com" && (
          <Route path="/admin" element={<Admin />} />
        )}
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
};

export default App;
