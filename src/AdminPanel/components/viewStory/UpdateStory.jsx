/** @format */

import React, { useState } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import styled from "styled-components";
import { TextareaAutosize } from "@mui/material";
import Header from "../../Common/Header";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
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
const MainPost = styled.div`
  width: 100%;
  border: 1px solid lightgoldenrodyellow;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 8px 9px 9px -7px rgba(74, 62, 74, 1);
  -moz-box-shadow: 8px 9px 9px -7px rgba(74, 62, 74, 1);
  box-shadow: 8px 9px 9px -7px rgba(74, 62, 74, 1);

  textarea {
    width: 100%;
    /* resize: none; */
    min-height: 150px;
    padding: 10px;
    word-wrap: break-word;
    height: auto;
    color: blue;
  }
`;
// const Button = styled.button`
//   /* Insert your favorite CSS code to style a button */
//     background-color: #00d1b2;
//     color: #fff;
//     width: 100%;
//     border: none;
//     cursor: pointer;
//     padding: 5px 0;
//     border-radius: 5px;
// `;

const UpdateStory = (props) => {
  const location = useLocation();
  const { title, description, storyAudio, storyImg, story, _id } =
    location.state;
  //
  console.log("data", location.state);

  const token = localStorage.getItem("token");
  const [editTitle, setTitle] = useState(title);
  const [editImage, setImage] = useState(storyImg);
  const [editAudio, setAudio] = useState(storyAudio);
  const [editDesc, setDesc] = useState(description);
  const [editStory, setStory] = useState(story);
  const [id, setId] = useState(_id);

  const updateStory = () => {
    try {
      let url = `https://lab-india.herokuapp.com/api/story/${id}`;

      const fd = new FormData();

      fd.append("storyimg", editImage);
      fd.append("storyaudio", editAudio);
      fd.append("story", editStory);
      fd.append("title", editTitle);
      fd.append("description", editDesc);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .put(url, fd, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Story Updated Successfully");
          },

          (error) => {
            console.log("data response error:::", error);
            alert("Unable To Update Story");
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
        <Header needaddbtn={false} cname={"Add Post"} />
        <MainContainer>
          <InputField>
            <Wrapper>
              <span>Title</span>
              <input
                type="text"
                placeholder="Enter Title"
                value={editTitle}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Wrapper>
            <Wrapper>
              <span>Description</span>
              <input
                type="text"
                value={editStory}
                onChange={(e) => {
                  setStory(e.target.value);
                }}
              />
            </Wrapper>
            <Wrapper>
              <span>Image</span>

              {/* <Button  onClick={handleClick}>
                    Upload Image
                </Button>
                <input type="file" accept='image/*'
                   ref={hiddenFileInput}
                   onChange={handleChange}
                 style={{display:'none'}} 
                /> */}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </Wrapper>
            <Wrapper>
              <span>Audio</span>
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => {
                  setAudio(e.target.files[0]);
                }}
              />
            </Wrapper>
            {/* <Wrapper>
              <span> Select Categories </span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </Wrapper> */}
            <MainPost>
              <span>Write Story</span>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Write Story"
                style={{
                  width: "100%",
                  outline: "none",
                  border: "none",
                  borderRadius: "5px",
                }}
                value={editDesc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </MainPost>
            <button onClick={updateStory}>Post</button>
          </InputField>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(UpdateStory);
