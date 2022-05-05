import React from 'react'
import HOC from '../../Common/HOC'
import { ContainerS} from '../../Common/CommonStyling'
import styled from 'styled-components'
import TradingList from './TradingList'
import Header from '../../Common/Header'

const MainContainer = styled.div`
    width: 100%;
    padding: 10px;
`

const needaddbtn = true;
const TradingHome = () => {
  return (
    <>
        <ContainerS>
          <MainContainer>
            <Header needaddbtn={needaddbtn} cname={"Trading"} btn={"Add Trading"} pathname={'/add-trading'}/>
            <TradingList/>
          </MainContainer>          
        </ContainerS> 
    </>
  )
}

export default HOC(TradingHome)