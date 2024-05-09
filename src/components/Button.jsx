/* eslint-disable react/prop-types */
import styled from "styled-components";


const Button = ({children, $textcolor, $bgcolor, $bordercolor, $style, onClick}) => {
    return (
        <>
            <StyledButton $bgcolor={$bgcolor} $textcolor={$textcolor} $bordercolor={$bordercolor} $style={$style} onClick={onClick}>
                {children}
            </StyledButton>
        </>
    );
}
export default Button;

export const StyledButton = styled.button`
    display: inline-block;
    font-weight: 400;
    color: ${props => props.$textcolor || "#212529"};
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: ${props => props.$bgcolor || "transparent"};
    border: 1px solid transparent;
    border-color: ${props => props.$bordercolor || "transparent"};
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    cursor: pointer;
    ${props => props.$style || ""}
`