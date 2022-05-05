import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { TextareaAutosize } from '@mui/material'
import Header from '../../Common/Header'

const MainContainer = styled.div`
    width: 100% ;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`
const InputField = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #3a3952;
    padding: 20px;
    flex-wrap: wrap;
    border-radius: 5px;
    background-color: #dadada;
    -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,1);
    box-shadow: 10px 10px 5px -8px rgba(0,0,0,1);

    span{
        color: #2d2b5a;
        margin-bottom: 5px;
        font-weight: 600;
    }
    button{
        border: none;
        cursor: pointer;
        background-color: #06604a;
        padding: 6px 30px;
        color: #fff;
        font-weight: 600;
        margin: 20px 0;
        border-radius: 4px;
    }

`
const Wrapper = styled.div`
width: 50%;
padding: 10px;
input{
        width: 100%;
        outline: none;
        /* border: 1px solid lightblue; */
        padding: 6px;
        border-radius: 3px;
        border: none;
    }

    @media screen and (max-width: 768px) {

        width: 100%;
    }

`
const MainPost = styled.div`
    width: 100%;
    border: 1px solid lightgoldenrodyellow;
    padding: 10px;
    border-radius: 5px;
    -webkit-box-shadow: 8px 9px 9px -7px rgba(74,62,74,1);
    -moz-box-shadow: 8px 9px 9px -7px rgba(74,62,74,1);
    box-shadow: 8px 9px 9px -7px rgba(74,62,74,1);

    textarea{
        width: 100%;
        /* resize: none; */
        min-height: 150px;
        padding: 10px;
        word-wrap: break-word;
        height: auto;
        color: blue;
    }
`

const Edit = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Edit Latest Post"} />

            <MainContainer>
            <InputField>
                <Wrapper>
                <span>Title</span>
                <input type="text"placeholder='Enter Title' value={"titls"}
                    // onChange={(e)=>settitls(e.target.value)}
                />
                </Wrapper>
                <Wrapper>
                <span>Description</span>
                <input type="text" placeholder='Enter Descriptions' value={"descriptions"}
                // onChange={(e)=>setdescriptions(e.target.value)}
                />
                </Wrapper>
                <Wrapper>
                <span>Image</span>
                <input type="file" />

                </Wrapper>
                <Wrapper>
                <span>Audio</span>
                <input type="file" accept='audio/*'/>

                </Wrapper>
                <Wrapper>
                <span> Select Categories </span>
                <select 
                // value={category}
                // onChange={(e)=>setCategory(e.target.value)}
                >
                    <option>Select Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                </select>
                </Wrapper>
                <MainPost>
                    <span>Write your Post</span>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Write your Post"
                    value={'posts'}
                    // onChange={(e) => setPosts(e.target.value)}
                    style={{ width: '100%', outline: 'none', border: 'none', borderRadius:'5px' }}                   
                    />
                </MainPost>
                <button>Post</button>   
            </InputField>
         </MainContainer>          
        </ContainerS>
    </>
  )
}

export default HOC(Edit)