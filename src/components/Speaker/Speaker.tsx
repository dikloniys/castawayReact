import styled from "styled-components";

const Speaker = styled.section`
    margin-bottom: 200px;
`
const SpeakerWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SpeakerDescription = styled.div`
    margin-right: 60px;
`
const SpeakerArrow = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 112px;
    height: 112px;
    background-color: $specialecolar;
    margin-bottom: 20px;
    cursor: pointer;
`
const SpeakerSubtitle = styled.nav`
    font-size: 18px;
    color: $specialecolar;
`
const SpeakerTitle = styled.h1`
    font-size: 65px;
    line-height: 79.2px;
    letter-spacing: 2.88px;
    margin-bottom: 28px;
`
const SpeakerP = styled.h1`
font-size: 22px
line-height: 33px
color: $textcolar
`
const SpeakerPhoto = styled.nav`
`
function SpeakerComponent() {
    return ( 
        <Speaker>
            <SpeakerWrap>
                <SpeakerDescription>
                    <SpeakerArrow>  
                        <img src="/svg/Frame.png" alt="">                                                           
                    </SpeakerArrow>
                    <SpeakerSubtitle>
                        Meet your host
                    </SpeakerSubtitle>
                    <SpeakerTitle>
                        Jacob Paulaner
                    </SpeakerTitle>
                    <SpeakerP>
                        Jacob has a background in audio engineering, and has been podcasting since the early days.
                    </SpeakerP>
                    <SpeakerP>
                        He’s here to help you level up your game by sharing everything he’s learned along the way.
                    </SpeakerP>
                </SpeakerDescription>
                <SpeakerPhoto>
                    <img src="/person.png" alt="">
                </SpeakerPhoto>
            </SpeakerWrap>
        </Speaker>
     );
}

export default SpeakerComponent;
