import styled from 'styled-components';
import Button from './Button';

const Section1 = () => {
    return (
        <StyledSection1>
            <div className='section1-inner'>
                <h1>Album example</h1>
                <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <StyledButtonArea >
                    <Button $textcolor="#fff" $bgcolor="#007bff" $bordercolor="#007bff" $style={`margin-top: .5rem; margin-bottom: .5rem;${ button1Hover}`}>Main call to action</Button>
                    <Button $textcolor="#fff" $bgcolor="#6c757d" $bordercolor="#6c757d" $style={`margin-top: .5rem; margin-bottom: .5rem;${button2Hover}`}>Secondary action</Button>
                </StyledButtonArea>
            </div>
        </StyledSection1>
    );
}
export default Section1;

const StyledSection1 = styled.section`
    padding: 2rem 1rem;
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 0;
    background-color: #fff;

    @media (min-width: 576px) {
        padding: 4rem 2rem;
    }

    @media (min-width: 768px) {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    & .section1-inner {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 40rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 300;
    }

    p {
        font-size: 1.25rem;
        font-weight: 300;
        color: #6c757d
    }
`

const StyledButtonArea = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
`

const button1Hover = "&:hover {color: #fff;background-color: #0069d9;border-color: #0062cc;}"

const button2Hover = "&:hover {color: #fff;background-color: #5a6268;border-color: #545b62;}"