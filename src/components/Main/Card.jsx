/* eslint-disable react/prop-types */
import styled from 'styled-components';
import SVG from '../../SVG/SVG';
import Button from './Button';

const Card = ({time}) => {
    return (
        <StyledCard>
            <SVG iconName="thumbnail" />
            <StyledCardBody>
                <p>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <StyledCardTools>
                    <StyledCardButtons>
                        <Button $textcolor="#6c757d" $bordercolor="#6c757d" $style={"padding: .25rem .5rem;font-size: .875rem;line-height: 1.5;border-radius: .2rem;border-top-right-radius: 0;border-bottom-right-radius: 0;"}>view</Button>
                        <Button $textcolor="#6c757d" $bordercolor="#6c757d" $style={"padding: .25rem .5rem;font-size: .875rem;line-height: 1.5;border-radius: .2rem;margin-left: -1px;border-top-left-radius: 0;border-bottom-left-radius: 0;"}>edit</Button>
                    </StyledCardButtons>
                    <small>{time}</small>
                </StyledCardTools>
            </StyledCardBody>
        </StyledCard>
    );
}
export default Card;

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .25rem;

    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
    margin-bottom: 1.5rem;

    & svg{
        overflow: hidden;
        vertical-align: middle;
        width: 100%;
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
        font-size: 1.125rem;
        text-anchor: middle;
        user-select: none;
    }
`

const StyledCardBody = styled.div`
    flex: 1 1 auto;
    padding: 1.25rem;
`

const StyledCardTools = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & small {
        font-size: 80%;
        font-weight: 400;
        color: #6c757d;
    }
`

const StyledCardButtons = styled.div`
    & :hover {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }
`