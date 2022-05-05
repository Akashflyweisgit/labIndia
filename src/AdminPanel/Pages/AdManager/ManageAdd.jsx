import React from 'react'
import {ContainerS} from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import AdsList from './AdsList'
import styled from 'styled-components'
import AdsGraph from './AdsGraph'

const Wrapper = styled.div`
    width: 100%;
    /* height: 200px; */

    padding: 10px;
    background-color: #fffbfb;
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    -webkit-box-shadow: 1px 2px 5px 0px rgba(135,132,135,1);
-moz-box-shadow: 1px 2px 5px 0px rgba(135,132,135,1);
box-shadow: 1px 2px 5px 0px rgba(135,132,135,1);
`
const SmallContainer = styled.div`
    width: 250px;
    height: 150px;
    /* border: 1px solid yellow; */
    border-radius: 5px;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(135,132,135,1);
    -moz-box-shadow: 1px 1px 5px 0px rgba(135,132,135,1);
    box-shadow: 1px 1px 5px 0px rgba(135,132,135,1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    margin: 10px 0;
    

    span{
        position: absolute;
        top: 20%;
        left: 10%;
        font-size: 1.5rem;
        font-weight: 700;
        color: #357bfd;
    }

    h4{
        position: absolute;
        bottom: 10%;
        right: 20%;
        font-size: 1.5rem;
        font-weight: 700;
        color: #393c44;
    }
 
`
const Graph = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    z-index: 1;
`

const ManageAdd = () => {
  return (
    <>
    <ContainerS>
        <Header cname={"Manage Ads"}/>
        <Wrapper>
            <SmallContainer>
                <span>1234</span>
                <h4>Total Ads</h4>
                <Graph>
                <AdsGraph/>

                </Graph>       
            </SmallContainer>
            <SmallContainer>
                <span>1234</span>
                <h4>Total Click</h4>
                <Graph>
                <AdsGraph/>

                </Graph>       
            </SmallContainer>
            <SmallContainer>
                <span>111K</span>
                <h4>Revenu</h4>
                <Graph>
                <AdsGraph/>

                </Graph>       
            </SmallContainer>
            
    
        </Wrapper>
        <AdsList/>
        

    </ContainerS>
    </>
  )
}

export default HOC(ManageAdd)