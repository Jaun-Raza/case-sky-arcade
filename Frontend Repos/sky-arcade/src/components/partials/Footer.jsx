import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <Top>
        <Logo>
          <img src="/assets/skyarcade_logo.png" alt="footer-logo" />
        </Logo>
        <button onClick={() => {
          window.location.href='https://discord.gg/GBMNA2vpEm'
        }}><i class="fa-brands fa-discord"></i> Join Our Discord</button>
      </Top>
      <Bottom>@2024, All rights reserverd.</Bottom>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.section`
  background-color: #0A0014;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`
const Top = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;

  button {
    background-color: #559cc9;
    padding: 1.5rem;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 0.5rem;
    color: #130128;
    cursor: pointer;
    transition: all 0.5s ease-in-out; 
    border: none;

    &:hover {
        transform: scale3d(1.5, 1.5, 1.5);
        box-shadow: 0px 0px 18px 4px #3b63e7;
    }
  }


  @media(max-width: ${({theme}) => theme.media.mobile}) {
    flex-direction: column;
    gap: 2rem;
  }
`
const Logo = styled.section`
  img {
    width: 30rem;
  }
`
const Bottom = styled.section`
  color: white;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 1rem;
`

export default Footer