/** @format */

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";

import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

//icons from react icons
import { ImBooks } from "react-icons/im";
import { BiCategoryAlt, BiBookContent } from "react-icons/bi";
import { FcPlanner } from "react-icons/fc";
import { SiSubstack } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";

const Sidebar = (props) => {
  const removeToken = (token) => {
    localStorage.clear();
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar_in_mobile_view">
        <ProSidebar collapsed={props.isloading}>
          <Menu iconShape="circle">
            <MenuItem
              title="DashBord"
              onClick={() => navigate("/dashbord")}
              icon={<DashboardTwoToneIcon />}
            >
              Dashboard
            </MenuItem>
            <SubMenu title="Posts" icon={<BiBookContent />}>
              <MenuItem onClick={() => navigate("/add-posts")}>
                Add Post
              </MenuItem>
              <MenuItem onClick={() => navigate("/post-list")}>
                Post List
              </MenuItem>
            </SubMenu>

            <SubMenu title="Story" icon={<BiBookContent />}>
              <MenuItem
                title="Add Story"
                onClick={() => navigate("/view-stories")}
                icon={<FaUserGraduate />}
              >
                View Story
              </MenuItem>
              <MenuItem
                title="Users"
                onClick={() => navigate("/add-story")}
                icon={<FaUserGraduate />}
              >
                Add Story
              </MenuItem>
            </SubMenu>
            <MenuItem
              title="Suscribers"
              onClick={() => navigate("/subscriber")}
              icon={<SiSubstack />}
            >
              Subscriber
            </MenuItem>
            <MenuItem
              title="Our Plane"
              onClick={() => navigate("/plane")}
              icon={<FcPlanner />}
            >
              Our Plan
            </MenuItem>
            <MenuItem
              title="categories"
              onClick={() => navigate("/categories")}
              icon={<BiCategoryAlt />}
            >
              Categories
            </MenuItem>
            <MenuItem
              title="Trading"
              onClick={() => navigate("/trading")}
              icon={<ImBooks />}
            >
              Trading Post
            </MenuItem>
            <MenuItem
              title="Leatest-Post"
              onClick={() => navigate("/leatest-post")}
              icon={<ImBooks />}
            >
              Leatest Post
            </MenuItem>
            <MenuItem
              title="Ads-Manager"
              onClick={() => navigate("/manage-ads")}
              icon={<ImBooks />}
            >
              Manage Ads
            </MenuItem>
            <SubMenu title="Setting" icon={<SettingsOutlinedIcon />}>
              <Link to="/">
                <MenuItem onClick={removeToken}>Logout</MenuItem>
              </Link>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
