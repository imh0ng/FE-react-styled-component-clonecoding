import styled from 'styled-components';
import Card from './Card';

const Album = () => {

    const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const cardRendering = () => {
        const result = [];
        for (let i = 0; i < cardArr.length; i++) {
          result.push(<StyledCardWrap><Card time="9 mins"/></StyledCardWrap>);
        }
        return result;
    }

    return (
        <StyledAlbum>
            <StyledAlbumInner>
                <StyledGrid>
                    {cardRendering()}
                </StyledGrid>
            </StyledAlbumInner>
        </StyledAlbum>
    );
}
export default Album;

const StyledAlbum = styled.div`
    background-color: #f8f9fa;
    padding-top: 3rem;
    padding-bottom: 3rem;
`

const StyledAlbumInner = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-right: -15px;
    margin-left: -15px;

    @media (max-width: 768px) {
        display: block;
    }
`

const StyledCardWrap = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`