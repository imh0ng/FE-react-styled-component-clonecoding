/* eslint-disable react/prop-types */
import HbgButton from "../../components/HbgButton";
import HeaderTitle from "./HeaderTitle";
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Header = ({ aboutContent, twitterLink, facebookLink, email }) => {
    const [isShow, setShowActive] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(contentRef.current.scrollHeight);
        }
    }, [isShow]);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => setShowActive(true), 350);
        } else {
            setTimeout(() => setShowActive(false), 350);
        }
    }, [isShow]);

    return (
        <StyledHeader>
            <StyledHeaderInner >
                <StyledHeaderShowBox className={`${isShow ? " show" : ""}`} style={{ height: isShow ? `${maxHeight}px` : '0px' }} ref={contentRef}>
                    <StyledHeaderShowBoxLeft >
                        <h4>About</h4>
                        <p>{aboutContent}</p>
                    </StyledHeaderShowBoxLeft>
                    <StyledHeaderShowBoxRight >
                        <h4>Contact</h4>
                        <ul>
                            {twitterLink ? (<li><a href={twitterLink} target="_blank">Follow on Twitter</a></li>) : ""}
                            {facebookLink ? (<li><a href={facebookLink} target="_blank">Like on Facebook</a></li>) : ""}
                            {email ? (<li><a href={email}>Email me</a></li>) : ""}
                        </ul>
                    </StyledHeaderShowBoxRight>
                </StyledHeaderShowBox>
                <StyledHeaderBar >
                    <div >
                        <HeaderTitle />
                    </div>
                    <div >
                        <HbgButton onClick={() => {
                            isShow ?
                            setShowActive(false) :
                            setShowActive(true)
                        }} />
                    </div>
                </StyledHeaderBar>
            </StyledHeaderInner>
        </StyledHeader>
    );
};
export default Header;

const StyledHeader = styled.header`
    background-color: #343a40;
`;

const StyledHeaderInner = styled.div`
    margin: auto;
    width: 100%;
    padding: 0 15px;
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

`;

const StyledHeaderShowBox = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    transition: height .35s ease;

    &:not(.show) {
        transition: height .35s ease;
    }
    h4 {
        font-size: 1.5rem;
        color: #fff;
    }
    &.showing {
        height: 0;
    }
`;

const StyledHeaderShowBoxLeft = styled.div`
    width: 100%;
    padding: 1.5rem 15px;
    @media (min-width: 576px) {
        max-width: 66.666667%;
    }
    @media (min-width: 768px) {
        max-width: 58.333333%;
    }
    p {
        color: #6c757d
    }
`;

const StyledHeaderShowBoxRight = styled.div`
    width: 100%;
    padding: 1.5rem 15px;
    @media (min-width: 576px) {
        max-width: 33.333333%;
    }
    @media (min-width: 768px) {
        margin-left: 8.333333%;
    }
    ul {
        padding-left: 0;
        list-style: none;
    }

    a {
        color: #fff;
        text-decoration: none;
        background-color: transparent;
    }
`;

const StyledHeaderBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
`;