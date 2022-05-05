/** @format */

import React, { useState, useEffect } from "react";
// import sikhlo from "../../../Components/images/shopping.jpg"
import { useNavigate } from "react-router-dom";

//css file
// import "./Login.css";

//login,register,resetpassword uses material ui text-feild
import {
  Button,
  Card,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import axios from "axios";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";

const OPTpage = (props) => {
  const navigate = useNavigate();

  //---------------------local state ----------------------
  // const [showPassword, setshowPassword] = useState(false);
  // const [password, setPassword] = useState("");
  const [code, setCode] = useState(null);
  const [email, setEmail] = useState("");

  const emailVerify = async () => {
    try {
      let url = "https://lab-india.herokuapp.com/api/varify-otp";
      let temp = {
        otp: code,
        email: email,
      };
      const res = await axios.post(url, temp);

      console.log(res);

      localStorage.setItem("token", res.data.token);

      console.log(res.data.token);
      // console.log()
      // .then((res) => {
      //   console.log("loginresponse:::", res);

      navigate("/dashbord");
      // }
      // );
    } catch (error) {
      alert("Please Enter Currect Details ::", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="Login_Main_div content_padding">
        <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
          {/* <div >
             <img style={{ height: "120px", width: "120px" }} src={"sikhlo"} alt="" className="login_image" />
             </div> */}
          <div>
            {/* <span>
              <h6>Enter OTP</h6>
            </span> */}
          </div>
          <div className="main_padding_top_bottom">
            <div className="pb-2">Email</div>
            <div className="pb-3">
              <TextField
                label="Email"
                autoComplete="off"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* <div className="pb-2">Password</div>
            <div className="pb-3">
              <TextField
                label="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div> */}

            <div className="pb-2">Enter OTP</div>
            <div className="pb-3">
              <TextField
                label="OTP"
                autoComplete="off"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>

            <div className="inputfiledformatting mt-2">
              <Button
                variant="contained"
                className="Login_page_button"
                onClick={emailVerify}
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default OPTpage;
