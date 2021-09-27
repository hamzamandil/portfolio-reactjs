import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
    return (
        <Card>
            <Image>
                <img src={props.img} alt="project" />
            </Image>
            <Content>
                <h3>{props.title}</h3>
                <div className="skills">
                {props.skills.map((skill, i) => (
                    <span class="skill" key={i}>{skill}</span>
                ))}
                    
                </div>
                <BtnsWrapper>
                    <BtnCode href={props.code} target="_blank">Code <i className="fab fa-github"></i></BtnCode>
                    <BtnLive href={props.live} target="_blank">Live <i className="fas fa-globe"></i></BtnLive>
                </BtnsWrapper>
            </Content>
        </Card>
    )
}

export default Project

const Card = styled.div`
    width: 18rem;
    height: 100%;
    box-shadow: 4px 2px 14px rgba(0,0,0,0.2);
    position: relative;
`

const Image = styled.div`
    width: 100%;
    height: 16rem;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;

        :hover {
            transform: scale(1.1);
        }
    }
`

const Content = styled.div`
    padding: 1rem;
    .skills {
        margin-bottom: 2.5rem;
    }
    .skills .skill {
        padding: 0.1rem 0.3rem;
        font-size: 14px;
        background-color: #ddd;
        border-radius: 3px;
        display: inline-block;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
    }
    h3 {
        margin-bottom: 0.5rem;
    }
`

const BtnsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.8rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
`

const BtnCode = styled.a`
    padding: 0.3rem 0.5rem;
    color: #fff;
    background: #1B5DC5;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }
`

const BtnLive = styled(BtnCode)`
`