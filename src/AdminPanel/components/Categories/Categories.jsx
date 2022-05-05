import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../Common/Header";
import HOC from "../../Common/HOC";
import CategoriesList from "./CategoriesList";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const MainContainer = styled.div`
  margin: 80px 0;
  width: 100%;

  h5 {
    margin: 20px 0;
  }
`;

function Complain(props) {
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      // setLoading(true);

      const auth = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const { data: response } = await axios.get(
          "https://lab-india.herokuapp.com/api/get/category",
          auth
        );

        setCategories(response);
        console.log("res", response);

        // console.log("packages", packages);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCategories();
  }, []);

  console.log("categories", categories);
  return (
    <Container>
      <MainContainer>
        <Header
          needaddbtn={true}
          btn={"Add Categories"}
          cname="Categories"
          pathname={"/add-categories"}
        />

        <CategoriesList categories={categories} />
      </MainContainer>
    </Container>
  );
}

export default HOC(Complain);
