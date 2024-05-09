import SVG from '../../SVG/SVG';
import styled from 'styled-components';

const HeaderTitle = () => {
    return (
        <StyledHeaderTitle className href='/'>
            <SVG iconName="camera" />
            <strong>Album</strong>
        </StyledHeaderTitle>
    );
};
export default HeaderTitle;

const StyledHeaderTitle = styled.a`
    color: #fff;
    align-items: center;
    display: flex;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;

    svg {
        margin-right: .5rem
    }
`