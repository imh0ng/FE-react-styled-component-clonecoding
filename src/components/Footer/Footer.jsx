import { styled } from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterInner>
                <StyledFloatRightP>
                <a href="#">Back to top</a>
                </StyledFloatRightP>
                <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                <p>
                New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="/docs/4.3/getting-started/introduction/">getting started guide</a>.
                </p>
            </StyledFooterInner>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: #6c757d;

    p {
        margin-bottom: .25rem;
    }
`

const StyledFooterInner = styled.footer`
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

const StyledFloatRightP = styled.p`
    float: right
`