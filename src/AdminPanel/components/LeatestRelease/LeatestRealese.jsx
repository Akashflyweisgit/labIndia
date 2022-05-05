import { ContainerS } from '../../Common/CommonStyling'
import LRealeasePost from './PostList'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'

const LeatestRealese = () => {
  return (
    <>
      <ContainerS>
          <Header cname={"Leatest Post"} needaddbtn={"yes"} btn="Add Latest Post" pathname={'/add-leatest-release'}/>
          <LRealeasePost/>
      </ContainerS>

    </>
  )
}
export default HOC(LeatestRealese)