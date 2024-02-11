import styled from "styled-components";
import {imgWay} from "../static/data/data";
import ImageUI from "../ui/ImageUI";
import ApplicationUi from "../ui/Application";
import img from "../static/imgs/effectup.png"

const Presentation = styled.section`
    margin-bottom: 100.44px;
`
const PresentationWrap = styled.div`
    display: flex;
`
const PresentationPhoto= styled.div`
    position: relative;
`
const PresentationEffect = styled.div`
    position: absolute;
    top: -26px;
    left: -26px;
`
const PresentationDescription = styled.div`

`
const Description = styled.div`
    margin: 0 60px ;
`
const DescriptionText = styled.div`
    margin-bottom: 90px;
`
const DescriptionTextP = styled.p`
    font-size: 70px;
    line-height: 88px;
`
const DescriptionTextNext = styled.span`
    font-size: 75px;
    position: relative;
`
const DescriptionTextBorder = styled.span`
    position: absolute;
    line-height: 0;
    bottom: 0;
    left: 0;
`
const DescriptionTextSpecial = styled.span`
    font-size: 80px;
    font-weight: 700;
`
const DescriptionContacts = styled.div`
    padding: 22px;
`
const DescriptionSubtitle = styled.div`
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 16px;
`
const NavMenu = styled.nav`
    font-size: 18px;
`
const Ul = styled.ul`
    display: flex;
`
const Li = styled.li`
    padding: 20px;
    cursor: pointer;
`
function HomeComponent() {
  return (
    <Presentation>
        <PresentationWrap>
            <PresentationPhoto>
                <ImageUI src={img} alt={imgWay.presentation.alt} />
                <PresentationEffect>
                    <ImageUI src={imgWay.effectUp.src} alt={imgWay.effectUp.alt}/>
                </PresentationEffect>
            </PresentationPhoto>
            <PresentationDescription>
                <Description>
                    <DescriptionText>
                        <DescriptionTextP>
                            Take your podcast to the
                        </DescriptionTextP>
                        <DescriptionTextNext>next
                            <DescriptionTextBorder>
                                <svg width="160" height="11" viewBox="0 0 160 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M161.952 6.53183C129.845 0.775619 97.196 3.95946 65.0087 2.92304C43.7248 2.22961 22.4395 0.559384 1.17106 0.000167246C0.533394 -0.0147452 0.00896029 0.969451 0.000103908 2.20719C-0.00836745 3.44492 0.502216 4.45899 1.13949 4.4739C22.4057 5.03312 43.6886 6.70335 64.9702 7.39678C97.0997 8.43322 129.687 5.24189 161.736 10.9906C162.371 11.1025 162.934 10.2003 162.995 8.97007C163.053 7.73979 162.583 6.65113 161.952 6.53183Z" fill="#118DA8"/>
                                </svg>                                        
                            </DescriptionTextBorder>
                        </DescriptionTextNext>
                        <DescriptionTextSpecial>level</DescriptionTextSpecial>
                    </DescriptionText>
                    <DescriptionContacts>
                        <DescriptionSubtitle>
                            Listen on
                        </DescriptionSubtitle>
                        <ApplicationUi/>
                        <NavMenu>
                            <Ul>
                                <Li><a href="/speaker.html">Home</a></Li>
                                <Li><a href="/episodes.html">Episodes</a></Li>
                                <Li><a href="/reviews.html">About</a></Li>
                                <Li><a href="">Contact</a></Li>
                            </Ul>
                        </NavMenu>
                    </DescriptionContacts>
                </Description>
            </PresentationDescription>
        </PresentationWrap>
     </ Presentation>
  );
}

export default HomeComponent;
