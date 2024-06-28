import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [toggleHarmBurger, setToggleHarmBurger] = useState(false);
    const [icon, setIcon] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIcon(window.innerWidth <= 768);
            setToggleHarmBurger(window.innerWidth <= 768)
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <HeaderWrapper setIcon={setIcon}>
            <HeaderTitle>Sky Arcade Network {icon ? <i class="fa-solid fa-bars" onClick={() => {
                setToggleHarmBurger(!toggleHarmBurger)
            }}></i> : null}</HeaderTitle>
            {
                toggleHarmBurger && icon ? null : <>
                    <HeaderElementsWrapper>
                        <NavLink to={'/'} >Home</NavLink>
                        <NavLink to={'/rules'}>Rules</NavLink>
                        <NavLink to={'/play'}>Play</NavLink>
                    </HeaderElementsWrapper>
                    <HeaderButton>Arcade Store</HeaderButton></>
            }
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 3rem;
    color: white;
    background-color: #0A0014;
    transition: all 0.5s ease-in-out; 
    
    i {
        font-size: 2rem;
        cursor: pointer;
        color: white;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        flex-direction: column;
        gap: 2rem;
    }
`;


const HeaderTitle = styled.section`
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: all 0.5s ease-in-out; 
    color: #559cc9;
    width: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;

    &:hover {
        text-shadow: 0px 1px 10px #3b63e7;
    }
`;
const HeaderElementsWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;

    a {
        font-size: 3rem;
        color: white;
        font-family: 'Poppins', sans-serif;
        transition: all 0.5s ease-in-out; 

        &:hover {
            color: #559cc9;
            text-shadow: 0px 1px 10px #3b63e7;
        }
    }
`;
const HeaderButton = styled.section`
    background-color: #559cc9;
    padding: 1.5rem;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 0.5rem;
    color: #130128;
    cursor: pointer;
    transition: all 0.5s ease-in-out; 

    &:hover {
        transform: scale3d(1.5, 1.5, 1.5);
        box-shadow: 0px 0px 18px 4px #3b63e7;
    }
`;

export default Header