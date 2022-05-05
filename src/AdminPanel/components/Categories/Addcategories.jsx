/** @format */

import React, { useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import styled from "styled-components";
import Header from "../../Common/Header";
import axios from "axios";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputField = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #3a3952;
  padding: 20px;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: #dadada;

  -webkit-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 1);

  span {
    color: #2d2b5a;
    margin-bottom: 5px;
    font-weight: 600;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: #06604a;
    padding: 6px 30px;
    color: #fff;
    font-weight: 600;
    margin: 20px 0;
    border-radius: 4px;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 10px;
  input {
    width: 100%;
    outline: none;
    /* border: 1px solid lightblue; */
    padding: 6px;
    border-radius: 3px;
    border: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Addcategories = () => {
  const token = localStorage.getItem("token");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState();

  const addCategory = () => {
    try {
      let url = "https://lab-india.herokuapp.com/api/add/category";

      const fd = new FormData();

      fd.append("myField", image);
      fd.append("category", category);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, fd, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Category Created Successfully");
          },

          (error) => {
            console.log("data response error:::", error);
            alert(" Unable To Create Category ");
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {}
  };
  return (
    <>
      <ContainerS>
        <Header cname={"Add Categories"} />
        <MainContainer>
          <InputField>
            <Wrapper>
              <span>Categories Name :</span>
              <input
                type="text"
                placeholder="Categories"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />

              <span className="mt-2">Image :</span>
              <input
                accept="image/*"
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </Wrapper>
            <button onClick={addCategory}>Save</button>
          </InputField>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(Addcategories);
