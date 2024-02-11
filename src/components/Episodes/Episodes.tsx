import styled from "styled-components";
import EpisodeComponent from "./Episode";
import ButtonUI from "../../ui/ButtonUi";

const Episodes = styled.section`
    margin-bottom: 260px;
`
const EpisodesWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 40px;
    position: relative;
`
const EpisodesSubtitle = styled.div`
    font-size: 64px;
    line-height: 79.2px;
    letter-spacing: 2.88px;
    position: absolute;
    left: 0;
    bottom: 0;
`
const EpisodesEpisodes = styled.nav`
`
function EpisodesComponent() {
    return ( 
        <Episodes>
            <EpisodesWrap>
                <EpisodesSubtitle>
                    Latest episodes
                </EpisodesSubtitle>
                <ButtonUI></ButtonUI>
            </EpisodesWrap>
            <EpisodesEpisodes>
            <EpisodeComponent></EpisodeComponent>
            </EpisodesEpisodes>
        </Episodes>
     );
}

export default EpisodesComponent;
