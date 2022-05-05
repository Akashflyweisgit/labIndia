import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import PostList from './PostList'

const PostListHome = () => {
  return (
    <>
        <ContainerS>
          <Header needaddbtn={true} cname={"Post List"} btn= {"Add Post"} pathname={'/add-posts'}/>
            <PostList/>
        </ContainerS>
    </>
  )
}

export default HOC(PostListHome)