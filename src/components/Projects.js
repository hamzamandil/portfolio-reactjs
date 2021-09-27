import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Project from './Project';
import Bounce from 'react-reveal/Bounce';

const Projects = () => {
    return (
        <Wrapper id="portfolio">
            <Container>
                <Fade top>
                    <h2>Projects</h2>
                </Fade>
                <ProjectsWrapper>
                    <Bounce left>
                        <Project title="Tesla Clone" skills={['React js', 'styled-components', 'Redux']} live="https://awesome-villani-e98c1f.netlify.app/" code="https://github.com/hamzamandil/Tesla-clone-reactjs" img="/imgs/tesla.png"/>
                        <Project title="Rest Countris Api App" skills={['React js', 'Api']} live="https://serene-mirzakhani-e7a3cd.netlify.app/" code="https://github.com/hamzamandil/rest-countries-api-app" img="/imgs/countries.jpg"/>
                        <Project title="Breaking Bad Api" skills={['React js', 'Api']} live="https://sleepy-shaw-c4322e.netlify.app/" code="https://github.com/hamzamandil/Breaking-Bad-API-reactjs" img="/imgs/breakingbad.png"/>
                        <Project title="Travel Website" skills={['React js']} live="https://hungry-hypatia-4028d6.netlify.app/" code="https://github.com/hamzamandil/Travel-website-using-reactjs" img="/imgs/travel.png"/>
                    </Bounce>
                    <Bounce right>
                        <Project title="Shows Api App" skills={['React js', 'Redux', 'Api']} live="https://upbeat-carson-bd7d62.netlify.app/" code="https://github.com/hamzamandil/shows-search-app-react-js" img="/imgs/shows.png"/>
                        <Project title="Wildlife Website" skills={['Html', 'Css', 'Javascript']} live="https://wildlifesite.netlify.app/" code="https://github.com/hamzamandil/Wildlife" img="/imgs/wildlife.png"/>
                        <Project title="Discord Clone" skills={['Html', 'Css']} live="https://relaxed-mcclintock-daf51a.netlify.app/" code="https://github.com/hamzamandil/clone-discord" img="/imgs/discord.png"/>
                        <Project title="Blogr Landing Page" skills={['Html', 'Css', 'Javascript']} live="https://optimistic-colden-d1efaf.netlify.app/" code="https://github.com/hamzamandil/blogr-frontendmentor" img="/imgs/blogr.png"/>
                    </Bounce>
                </ProjectsWrapper>
            </Container>
        </Wrapper>
    )
}

export default Projects

const Wrapper = styled.section`
    padding: 5rem 0;
    /*display: flex;
    align-item: center;
    justify-content: center;*/
`

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: auto;

    h2 {
        text-align: center;
        font-size: 2.5rem;
    }
`

const ProjectsWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem 0;
`