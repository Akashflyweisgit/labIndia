/** @format */

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const SmallContainer = styled.div`
  overflow: hidden;

  width: 240px;
  height: 340px;
  border: 1px solid lightblue;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  -webkit-box-shadow: 8px 9px 9px -7px rgba(74, 62, 74, 1);
  -moz-box-shadow: 8px 9px 9px -7px rgba(74, 62, 74, 1);
  box-shadow: 8px 9px 9px -7px rgba(74, 62, 74, 1);
  margin: 10px 0;

  :hover {
    transform: scale(1.04);
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

const DetailsWrapper = styled.div`
  text-align: center;
  overflow: hidden;
  word-wrap: break-word;
  height: 50px;
  padding: 4px 0;
`;

const EditBtn = styled.div`
  width: 100%;
  position: relative;
  height: 30px;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    border-radius: 999px;
    padding: 3px;

    :nth-child(2) {
      color: red;
    }
  }
`;

const PostList = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      img: "https://www.businessinsider.in/thumb.cms?msid=83750046&width=1200&height=900 ",
      title: "title1",
      description: "description",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis culpa a nostrum. Perspiciatis veniam doloribus omnis voluptatum fugiat quae? Hic assumenda minima ut temporibus totam atque asperiores incidunt officiis?",
    },
    {
      id: 2,
      img: "https://www.businessinsider.in/thumb.cms?msid=83750046&width=1200&height=900 ",
      title: "title2",
      description: "des 2",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis culpa a nostrum. Perspiciatis veniam doloribus omnis voluptatum fugiat quae? Hic assumenda minima ut temporibus totam atque asperiores incidunt officiis?",
    },
    {
      id: 3,
      img: "https://www.businessinsider.in/thumb.cms?msid=83750046&width=1200&height=900 ",
      title: "title3",
      description: "description3",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis culpa a nostrum. Perspiciatis veniam doloribus omnis voluptatum fugiat quae? Hic assumenda minima ut temporibus totam atque asperiores incidunt officiis?",
    },
    {
      id: 4,
      img: "https://www.businessinsider.in/thumb.cms?msid=83750046&width=1200&height=900 ",
      title: "title4",
      description: "description4",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis culpa a nostrum. Perspiciatis veniam doloribus omnis voluptatum fugiat quae? Hic assumenda minima ut temporibus totam atque asperiores incidunt officiis?",
    },
    {
      id: 5,
      img: "https://www.businessinsider.in/thumb.cms?msid=83750046&width=1200&height=900 ",
      title: "title5",
      description: "description5",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis culpa a nostrum. Perspiciatis veniam doloribus omnis voluptatum fugiat quae? Hic assumenda minima ut temporibus totam atque asperiores incidunt officiis?",
    },
  ];

  return (
    <>
      <MainContainer>
        <Content>
          {data.map((data) => (
            <SmallContainer key={data.id}>
              <ImageWrapper
                onClick={() => navigate("/view-posts-details", { state: data })}
              >
                <img src={data.img} alt="" />
              </ImageWrapper>
              <DetailsWrapper>
                <h6>
                  Title : <span>{data.title} </span>{" "}
                </h6>
                <h6>
                  Description : <span>{data.description}</span>{" "}
                </h6>
              </DetailsWrapper>

              <EditBtn>
                <button
                  onClick={() => navigate("/edit-posts", { state: data })}
                >
                  <EditOutlinedIcon />{" "}
                </button>
                <button>
                  <DeleteOutlineIcon />{" "}
                </button>
              </EditBtn>
            </SmallContainer>
          ))}
        </Content>
      </MainContainer>
    </>
  );
};

export default PostList;
