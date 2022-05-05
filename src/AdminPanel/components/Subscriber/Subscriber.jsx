import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'

const Subscriber = () => {
  return (
    <>
        <ContainerS>
            <Header needaddbtn={false} cname={" Subscriber "}/>                  
        </ContainerS>
    </>
  )
}

export default HOC(Subscriber)