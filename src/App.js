import "./App.css";
import About from "./components/pages/About.js";
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";
import Contact from "./components/pages/Contact.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./components/layouts/Master.js";
import Events from "./components/pages/Events.js";
import Causes from "./components/pages/Causes.js";
import Login from "./components/auth/Login.js";
import Registration from "./components/auth/Registration.js";
import AdminMaster from "./components/layouts/AdminMaster.js";
import AddPost from "./components/admin/posts/AddPost.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./components/pages/AdminHome.js";
import AddDrive from "./components/admin/drives/AddDrive.js";
import Enquiry from "./components/user/Enquiry.js";
import ViewPosts from "./components/user/ViewPosts.js";
import ManageDrive from "./components/admin/drives/ManageDrive.js";
import ManagePost from "./components/admin/posts/ManagePost.js";
import ViewRequest from "./components/admin/view/ViewRequest.js";
import ViewEnquiry from "./components/admin/view/ViewEnquiry.js";
import Profile from "./components/user/Profile.js";
import ViewUsers from "./components/admin/view/ViewUsers.js";
import EditPost from "./components/admin/posts/EditPost.js";
import EditDrive from "./components/admin/drives/EditDrive.js";
import Dashboard from "./components/admin/Dashboard.js";
import History from "./components/user/History.js";
import PastDrives from "./components/user/PastDrives.js";
import UpcomingDrives from "./components/user/UpcomingDrives.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/posts" element={<ViewPosts/>} />
            <Route path="/enquiry" element={<Enquiry/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/pastdrives" element={<PastDrives/>} />
            <Route path="/upcomingdrives" element={<UpcomingDrives/>} />
          </Route>
          <Route path="/admin" element={<AdminMaster />}>
          <Route path="/admin" element={<Dashboard />}></Route>
            <Route path="/admin/adminhome" element={<AdminHome/>} />
            <Route path="/admin/post" element={<AddPost />} />
            <Route path="/admin/drive" element={<AddDrive/>} />
            <Route path="/admin/managedrive" element={<ManageDrive/>} />
            <Route path="/admin/managepost" element={<ManagePost/>} />
            <Route path="/admin/viewrequest" element={<ViewRequest/>} />
            <Route path="/admin/viewenquiry" element={<ViewEnquiry/>} />
            <Route path="/admin/viewusers" element={<ViewUsers/>} />
            <Route path="/admin/editpost/:id" element={<EditPost/>} />
            <Route path="/admin/editdrive/:id" element={<EditDrive/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
