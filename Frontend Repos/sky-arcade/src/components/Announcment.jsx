import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Announcment = ({announcementID, banner, title, description}) => {
    return (
        <NavLink to={`/annoucement/${announcementID}`}>
            <AnnouncmentWrapper>
                <Banner>
                    <img src={banner} alt="annoucnment-banner" />
                </Banner>
                <Info>
                    <Tag>Announcement</Tag>
                    <Title>{title.slice(0, 25) + '...'} <span>2-6-24</span></Title>
                    <Description>{description.slice(0, 200) + '...'}</Description>
                </Info>
            </AnnouncmentWrapper>
        </NavLink>
    )
}

const AnnouncmentWrapper = styled.section`
    width: 40rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    background-image: linear-gradient(22deg, #001369, #8f7f7f);
    padding: 1rem;
    transition: all 0.5s ease-in-out;
    animation: moveInfinite 1s infinite;
    
    &:hover {
        transform: rotateY(30deg);
    }

    @keyframes moveInfinite {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(5px);
        }

        100% {
            transform: translateY(0px);
        }
    }
`;
const Banner = styled.section`
    img {
        width: 100%;
        border-radius: 1rem;
    }
`;
const Info = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
    padding: 1rem;
`;

const Tag = styled.section`
    font-size: 1.3rem;
    background-color: red;
    color: white;
    width: 11.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-family: 'Poppins', sans-serif;
`

const Title = styled.section`
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
        color: #ccc8c8;
        font-size: 1.5rem;
    }
`;
const Description = styled.section`
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
`;

export default Announcment