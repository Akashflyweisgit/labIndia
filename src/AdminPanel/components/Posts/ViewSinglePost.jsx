import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'

const MainContainers = styled.div`
    width: 100%;
    display: flex;
    align-items:center ;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    border: 1px solid #9e9e9e ;
    padding: 20px;
    border-radius: 5px;

    input, textarea {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 20px;
    }

    span{
      color: #2d2b5a;
      margin-left: 10px;
    }
    -webkit-box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);
    -moz-box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);
    box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);

`
const Image = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 50%; 
  img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`
const CardDetails =  styled.div`

    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
   -webkit-touch-callout: none; // Disable Android & iso long press: ;
   margin: 20px 0;
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 10px;

   h4{
     color: #075d71;
     font-size: 1.3rem;
     font-weight: 700;
   }

   @media screen and (max-width: 768px) {
    width: 100%;

   }

   h5{
     display: flex;
     font-size: 0.9rem;
     color: #3d2304;
     p{
      color: blue;
      border: 1px solid;
     
        
     }
   }
`
const DetailsWrapper  = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap;
  justify-content: space-between; */
`

const ViewSinglePost = () => {
  return (
    <>
        <ContainerS>
            <MainContainers>
            <Wrapper>
                
                <DetailsWrapper>

                <CardDetails>
                <Image>
                  <img src= "" alt="" />
                </Image>
                <h4> Details</h4>
                <h5> Title : <span> Title</span>  </h5>
                <h5> description : <span>Description </span></h5>
      

                </CardDetails>
                <CardDetails>
                  <h4>Post</h4>
                  <p >

                     <p style={{marginLeft: "50px"}}>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.  sit qui 
          
                         </p>  Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque 
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      {/* <br/> */}
                      <p>                    
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in facilis doloribus, distinctio inventore aspernatur nemo esse illo atque velit, repudiandae doloremque, itaque natus sit qui laudantium praesentium optio ab?
                      </p>
                      </p>               
                </CardDetails>                    
                </DetailsWrapper>       
            </Wrapper>
            </MainContainers>
        </ContainerS>
    </>
  )
}

export default HOC(ViewSinglePost)