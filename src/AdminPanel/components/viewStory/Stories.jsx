/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HOC from "../../Common/HOC";
import Header from "../../Common/Header";
import { ContainerS } from "../../Common/CommonStyling";
import AllStories from "./AllStories";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const MainContainer = styled.div`
  width: 100%;

  h5 {
    margin: 20px 0;
  }
`;

function Stories(props) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      // setLoading(true);

      const auth = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const { data: response } = await axios.get(
          "https://lab-india.herokuapp.com/api/story",
          auth
        );

        setStories(response.getAllStory);
        console.log("res", response);

        // console.log("packages", packages);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchStories();
  }, []);

  console.log("stories", stories);

  return (
    <ContainerS>
      <MainContainer>
        <Header cname="All Stories" needaddbtn={false} />
        <AllStories stories={stories} />
      </MainContainer>
    </ContainerS>
  );
}

export default HOC(Stories);
