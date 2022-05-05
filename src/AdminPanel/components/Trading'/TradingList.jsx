import React from 'react'
import styled from 'styled-components'

import EditIcon from '@mui/icons-material/Edit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useNavigate } from 'react-router';

const Content= styled.div`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`
const SmallContent = styled.div`
    width: 200px;
   height: 280px;
    border: 1px solid lightgray;
    margin: 10px 5px ;
    border-radius: 3px;
    -webkit-box-shadow: -1px 2px 8px 0px rgba(99,90,99,1);
    -moz-box-shadow: -1px 2px 8px 0px rgba(99,90,99,1);
    box-shadow: -1px 2px 8px 0px rgba(99,90,99,1);
    overflow: hidden;
    position: relative;

    transition: all 0.4s ease-in-out;
  :hover{

    transform: scale(1.04); 
    
  }


`
const ImgWrapper = styled.div`
    
    padding: 5px;
    width: 100%;
    height: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }


`
const Title = styled.div`
    font-size: 0.91rem;
    text-align: center;
    word-wrap: break-word;
    color: #3a3952;
    z-index: 2;
    span{
        color: black;
    }
    
`

const ShortDescription = styled.div`
    text-align: center;
    margin: 5px 3px;
    font-size: 0.91rem;
    height: 20px;
    overflow: hidden;
    z-index: 2;
`

const EditBtn = styled.div`

width: 100%;
position: relative;
height: 30px;
display: flex;
justify-content: space-between;

button{
    border: none;
    border-radius: 999px;
    padding: 3px;

    :nth-child(2){
        color: red;
    }
}


`

const TradingList = () => {

    const data = [

        { id: 1, title : 'title', description : "description", img : "https://picsum.photos/200"},
        { id: 2, title : 'title', description : "description", img : "https://picsum.photos/200"},
        { id: 3, title : 'title', description : "description", img : "https://picsum.photos/200"},
        { id: 4, title : 'title', description : "description", img : "https://picsum.photos/200"},
        { id: 5, title : 'title', description : "description", img : "https://picsum.photos/200"},
        { id: 6, title : 'title', description : "description", img : "https://picsum.photos/200/300.jpg"},
    ]
    const navigate = useNavigate();
     
  return (

    

    <>
        <Content> 
            {data.map((data=>(

                <SmallContent key={data.id}>
                <ImgWrapper>
                <img src={data.img} alt="" />
                </ImgWrapper>
                <Title>
                    Title : <span>title</span>
                </Title>
                <ShortDescription>
                    Description : 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </ShortDescription>
                {data ? (
                    <EditBtn>
                        <button   onClick={()=>navigate('/edit-trading',{state:data})}><EditIcon/> </button>
                        <button><DeleteRoundedIcon/> </button>
                    </EditBtn>
                ): null }


                </SmallContent>
             
            )))}            
        </Content>
    </>
  )
}

export default TradingList