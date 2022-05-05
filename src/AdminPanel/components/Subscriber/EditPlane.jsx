import React from 'react'
import HOC from '../../Common/HOC'
import {ContainerS} from '../../Common/CommonStyling'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import Header from '../../Common/Header'

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items:center ;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    input, textarea {
        margin-bottom: 10px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 20px;
    }
 
`

const BtnDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        float: right;
        width: 119px;
        padding: 5px 0;
        border: none;
        background-color: #9e9af0;
        color: #fff;
        cursor: pointer;
        border-radius: 4px;
    }
`

const EditTrading = () => {
    const location = useLocation();
    console.log("location",location.state)

  return (
    <>
    <ContainerS>
        <Header needaddbtn={false} cname={" Edit Subscription Plan "}/>
        <MainContainer>
            <Wrapper>
                <span>Name :  </span>
                <input type="text" value={"titles"}  />
                <span>Descriptions : </span>
                <textarea value={"description"}  />
                <span>Price</span>
                <input type="text" />
                <span>Yearly </span>
                <input type="number" />
                <span>Monthly</span>
                <input type="text" />
                <BtnDiv>        
                <button>Update</button>
                </BtnDiv>
            </Wrapper>
        </MainContainer>
    </ContainerS>
    </>
  )
}

export default HOC(EditTrading)