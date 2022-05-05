import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import Header from '../../Common/Header'
import { useNavigate } from 'react-router'

const MainContainers = styled.div`

  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;

  
`

const SmallContainers = styled.div`
  width: 300px;
  border: 1px solid lightblue;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  height: 500px;
  margin: 10px 20px;
  :nth-child(1){
    background-color: gold;
    -webkit-box-shadow: -1px 2px 8px 0px rgba(231,166,26,1);
-moz-box-shadow: -1px 2px 8px 0px rgba(231,166,26,1);
box-shadow: -1px 2px 8px 0px rgba(231,166,26,1);
  }
  :nth-child(2){
    background-color: silver;
    -webkit-box-shadow: -1px 2px 8px 0px rgba(148,148,146,1);
-moz-box-shadow: -1px 2px 8px 0px rgba(148,148,146,1);
box-shadow: -1px 2px 8px 0px rgba(148,148,146,1);
  }
  :nth-child(3){
    -webkit-box-shadow: 4px 4px 12px -1px rgba(218,174,140,1);
-moz-box-shadow: 4px 4px 12px -1px rgba(218,174,140,1);
box-shadow: 4px 4px 12px -1px rgba(218,174,140,1);
  }

  transition: all 0.4s ease-in-out;
  :hover{

    transform: scale(1.04); 
    
  }

`
const Image = styled.div`

  width: 100%;
  height: 200px;
  margin: 10px 0;

  img{
    width: 100%;
    height: 100%;
  }
`
const PlaneDetails = styled.div`
  width: 100%;
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h6{
    font-size: 1.4rem;
    font-weight: 700;
    color: #3a3952;
  }
  span{
    margin: 5px ;
  }
  button{
    width: 188px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #3a3952;
    color: gold;
    padding: 4px 0;
  }

`

const SubscribPlane = () => {

  const navigate =  useNavigate()
  return (
    <>
      <ContainerS>
        <Header cname="Our Plan" needaddbtn={false} />
        <MainContainers>
          <SmallContainers>
            <Image>
              <img src="https://i0.wp.com/rhf.org.in/wp-content/uploads/2017/09/Gold.png?fit=500%2C500&ssl=1" alt="" />
            </Image>
            <PlaneDetails>
              <h6>Gold Membership</h6>
              <span > Price : Rs 900/Monthly </span>
              <span>  Membership : 2 Screen + HD</span>
              <span> lorem : lorem </span>
              <button onClick={()=>navigate('/edit-plane')}>Edit</button>
            </PlaneDetails>
          </SmallContainers>
          <SmallContainers>
            <Image>
              <img src="https://toyoos.com/wp-content/uploads/2018/07/Silver-Membership.png" alt="" />
            </Image>
            <PlaneDetails>
              <h6>Silver Membership</h6>
              <span> Price : Rs 90809 </span>
              <span> details : details</span>
              <span> lorem : lorem </span>
              <button  onClick={()=>navigate('/edit-plane')}>Edit</button>
            </PlaneDetails>
          </SmallContainers>
          <SmallContainers>
            <Image>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcGRzF4QHWI1FREIVm6-YEsubreQhsARAVw&usqp=CAU" alt="" />
            </Image>
            <PlaneDetails>
              <h6>Bronze Membership</h6>
              <span> Price : Rs 90809 </span>
              <span> details : details</span>
              <span> lorem : lorem </span>
              
              <button  onClick={()=>navigate('/edit-plane')}>Edit</button>   
            </PlaneDetails>
          </SmallContainers>

        </MainContainers>
      
      </ContainerS>
    </>
  )
}

export default HOC(SubscribPlane)