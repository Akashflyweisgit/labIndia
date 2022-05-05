/** @format */

import React from "react";
import { ContainerS } from "../../Common/CommonStyling";
import Header from "../../Common/Header";
import HOC from "../../Common/HOC";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  border: 1px solid #9e9e9e;
  padding: 20px;
  border-radius: 5px;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #302f43;
  }

  input,
  textarea {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 20px;
  }

  span {
    color: #03560e;
  }

  -webkit-box-shadow: 8px 8px 7px -6px rgba(48, 47, 48, 1);
  -moz-box-shadow: 8px 8px 7px -6px rgba(48, 47, 48, 1);
  box-shadow: 8px 8px 7px -6px rgba(48, 47, 48, 1);
`;

// const BtnDiv = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     button{
//         float: right;
//         width: 119px;
//         padding: 5px 0;
//         border: none;
//         background-color: #9e9af0;
//         color: #fff;
//         cursor: pointer;
//         border-radius: 4px;
//     }
// `

const Image = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    width: 200px;
    height: 100%;
    object-fit: cover;
  }
`;
const CardDetails = styled.div`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  -webkit-touch-callout: none; // Disable Android & iso long press: ;
  margin: 20px 0;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h5 {
    display: flex;
    font-size: 0.9rem;
    color: #aa5b00;

    p {
      color: transparent;
      text-shadow: 0 0 8px #000;
    }
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ViewSubDetails = () => {
  const location = useLocation();
  const {
    firstname,
    lastname,
    email,
    city,
    country,
    profilepicture,
    relationship,
    state,
    street1,
    street2,
    numberofchildren,
    childage,
    phone,
    isVerified,
  } = location.state;
  // const name = location.state.name;
  // const email = location.state.email;
  // const cardnumber = location.state.cardNumber;
  // const nameoncard = location.state.nameOncard;
  // const expirydate = location.state.expiryDate;
  // const cvv = location.state.cvv;
  // const img = location.state.img;
  console.log("subscriberData", location.state);

  return (
    <>
      <ContainerS>
        <Header needaddbtn={false} cname={" View User Details "} />
        <MainContainer>
          <Wrapper>
            <Image>
              <img src={profilepicture} alt="" />
            </Image>
            <DetailsWrapper>
              <CardDetails>
                <h4>
                  Parent's Name :{" "}
                  <span>
                    {" "}
                    {firstname} {lastname}
                  </span>{" "}
                </h4>
                <h4>
                  Child Age : <span> {childage} Years</span>{" "}
                </h4>
                <h4>
                  Phone No: <span> {phone}</span>{" "}
                </h4>
                <h4>
                  Email : <span> {email} </span>{" "}
                </h4>
                <h4>
                  Valid To: <span>22-08-2022</span>{" "}
                </h4>
                <h4>
                  {" "}
                  Next Billing : <span> 22-08-2022</span>{" "}
                </h4>
                <h4>
                  Day Remain: <span>15 days</span>{" "}
                </h4>
                <h4>
                  Ongoing Plan: <span>2 Screen HD+</span>{" "}
                </h4>
                <h4>
                  Yearly : <span>Rs 12000 </span>{" "}
                </h4>
                <h4>
                  Monthly : <span>Rs 499 </span>{" "}
                </h4>
                <h4>
                  Membership : <span> Gold</span>{" "}
                </h4>
                <h4>
                  Country : <span> {country}</span>{" "}
                </h4>
                <h4>
                  State : <span> {state}</span>{" "}
                </h4>
                <h4>
                  Street :{" "}
                  <span>
                    {" "}
                    {street1} {street2}
                  </span>{" "}
                </h4>
              </CardDetails>
              {/* <CardDetails>
                <h4>Card Details</h4>
                <h5>Name On Card :{nameoncard} </h5>
                <h5>
                  Card Number : <p> {cardnumber} </p>
                </h5>
                <h5>
                  Expiration : <p> {expirydate} </p>{" "}
                </h5>
                <h5>
                  CVV : <p> {cvv} </p>{" "}
                </h5>
              </CardDetails> */}
            </DetailsWrapper>
            {/* <BtnDiv>        
                <button>Update</button>
                </BtnDiv> */}
          </Wrapper>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(ViewSubDetails);
