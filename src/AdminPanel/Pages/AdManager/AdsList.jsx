import { Switch } from '@material-ui/core'
import { FormControlLabel } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid lightgray; */
    flex-wrap: wrap;
`
const SmallContainer = styled.div`
  width: 50%;
  height: 170px;
  border: 1px solid lightgray;
  padding: 10px;
  position: relative;
  margin: 10px 0;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`
const Checkbox = styled.div`
  position: absolute;
  right: 0%;
  bottom: 3%;
`

const AdsList = () => {
  return (
    <>
    <MainContainer>

      <SmallContainer>
        <img src="https://www.adlibweb.com/wp-content/uploads/2018/11/ads-logo-vertical-reversed.png" alt="" />
        <Checkbox>
        <FormControlLabel control={<Switch defaultChecked />} label="User Can See" />
        </Checkbox>
      </SmallContainer>
  
      <SmallContainer>
        <img src="https://www.adlibweb.com/wp-content/uploads/2018/11/ads-logo-vertical-reversed.png" alt="" />
        <Checkbox>
        <FormControlLabel control={<Switch defaultChecked />} label="User Can See" />
        </Checkbox>
      </SmallContainer>
      <SmallContainer>
        <img src="https://www.adlibweb.com/wp-content/uploads/2018/11/ads-logo-vertical-reversed.png" alt="" />
        <Checkbox>
        <FormControlLabel control={<Switch defaultChecked />} label="User Can See" />
        </Checkbox>
      </SmallContainer>
  
      <SmallContainer>
        <img src="https://www.adlibweb.com/wp-content/uploads/2018/11/ads-logo-vertical-reversed.png" alt="" />
        <Checkbox>
        <FormControlLabel control={<Switch defaultChecked />} label="User Can See" />
        </Checkbox>
      </SmallContainer>

    </MainContainer>
    </>
  )
}

export default AdsList