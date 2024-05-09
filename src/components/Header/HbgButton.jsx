/* eslint-disable react/prop-types */
import SVG from '../../SVG/SVG';
import styled from 'styled-components';

const HbgButton = ({onClick}) => {
    return (
        <StyledHbgButton onClick={onClick} >
            <SVG iconName="hbg"/>
        </StyledHbgButton>
    );
};
export default HbgButton;

const StyledHbgButton = styled.button`
    color: rgba(255, 255, 255, .5);
    cursor: pointer;
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    border-color: rgba(255, 255, 255, .1);

    &:focus {
        outline: 5px auto -webkit-focus-ring-color;
    }
`;