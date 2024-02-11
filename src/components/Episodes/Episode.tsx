import styled from "styled-components";
import ButtonUI from "../../ui/ButtonUi";

const Episode = styled.div`
	background-color: $backgroundblock;
	border-radius: 32px;
	display: flex;
	margin-bottom: 60px;
	padding: 40px;
`
const EpisodePhoto = styled.div`
    margin-right: 53px;
`
const EpisodeDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const EpisodeTitle = styled.div`
    background-color: $background;
    border-radius: 6px;
    font-size: 18px;
    padding: 0 16px;
    margin-bottom: 48.44px;
`
const EpisodeNumbering = styled.div`
    font-size: 17px;
    margin-bottom: 17.56px;
    color: $specialecolar;
`
const Span = styled.span`
    font-size: 18px;
    margin-left: 5px;
    color: $specialecolar;
`
const EpisodeTheme = styled.div`
    margin-bottom: 28px;
    font-size: 64px;
    line-height: 70.4px;
    letter-spacing: 2.56px;
`
const EpisodeText = styled.div`
    margin-bottom: 18px;
    color: $textcolar;
    font-size: 22px;
    line-height: 33px;
`
const EpisodeDutton = styled.div`
`
function EpisodeComponent() {
    return ( 
        <Episode>
            <EpisodePhoto>
                <img src="/preview2.png" alt="">
            </EpisodePhoto>
            <EpisodeDescription>
                <EpisodeTitle>
                    Tips & Tricks
                </EpisodeTitle>
                <EpisodeNumbering>
                    Episode<Span>2</Span>
                </EpisodeNumbering>
                <EpisodeTheme>
                    Mic tricks to take you to the next level
                </EpisodeTheme>
                <EpisodeText>
                    Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.
                </EpisodeText>
                <ButtonUI></ButtonUI>
            </EpisodeDescription>
        </Episode>
     );
}

export default EpisodeComponent;
