/** @format */

import React, { useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import styled from "styled-components";
import Header from "../../Common/Header";
import { useLocation } from "react-router";
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

const EditCategories = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  //   const name = location.state.name;
  console.log("location state", location.state);
  const { category, _id } = location.state;
  const [name, setName] = useState(category);
  const [image, setImage] = useState();
  const [id, setId] = useState(_id);

  const updateCategory = () => {
    try {
      let url = `https://lab-india.herokuapp.com/api/edit/category/${id}`;

      const fd = new FormData();

      fd.append("myField", image);
      fd.append("category", name);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, fd, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Category Updated Successfully");
          },

          (error) => {
            console.log("data response error:::", error);
            alert("Category To Update Story");
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
        <Header cname={"Edit Categories"} />
        <MainContainer>
          <InputField>
            <Wrapper>
              <span>Categories Name :</span>
              <input
                type="text"
                placeholder="Categories"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <span>Image :</span>
              <input
                accept="image/*"
                type="file"
                placeholder="Categories"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </Wrapper>
            <button onClick={updateCategory}>Update</button>
          </InputField>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(EditCategories);
