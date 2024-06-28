import React from 'react'
import styled from 'styled-components'
import Announcments from './Announcments';

const Landing = () => {
  return (
    <>
      <Banner>
        <Info>
          <Title>Sky Arcade Network</Title>
          <Bio>Welcome to <span>SkyArcade</span>! Enjoy our unique blend of skyblock and prisons, all with an arcadey twist. Join us for monthly events and endless fun. Dive in and be part of the adventure!
          </Bio>
          <IP>
            <a onClick={() => {
              navigator.clipboard.writeText('play.skyarcade.net')
            }}>play.skyarcade.net</a>
          </IP>
          <p><i class="fa fa-circle-info"></i> Click the above button to copy the IP!</p>
        </Info>
        <Logo>
          <img src="/assets/skyarcade_logo.png" width={'450px'} alt="server-logo" />
        </Logo>
      </Banner>
      <Announcments />
    </>
  )
}

const Banner = styled.section`
  width: 100%;
  height: 60vh;
  background-color: #0d0028;  
  display: flex;
  justify-content: space-around;
  padding-top: 8rem;
`;
const Info = styled.section`
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    color: white;
    font-family: 'Poppins', sans-serif;
  }


  @media(max-width: ${({theme}) => theme.media.mobile}) {
    width: 90%;
  }
`;
const Title = styled.section`
  color: #559cc9;
  text-shadow: 0px 1px 10px #610C95;
  font-size: 4.5rem;
  font-family: 'Poppins', sans-serif;

`;
const Bio = styled.section`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;

  span {
    color: #559cc9;
    text-shadow: 0px 1px 10px #3b63e7;
  }
`;
const IP = styled.section`
  font-size: 4rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.5s ease-in-out;
  text-align: center;
  border-radius: 1rem;
  background-color: #0A0014;


  &:hover {
    color: #559cc9;
    text-shadow: 0px 1px 10px #3b63e7;
    cursor: pointer;
    transform: scale3d(1.3, 1.5, 1.5);
  }
`;
const Logo = styled.section`

  @media(max-width: ${({theme}) => theme.media.mobile}) {
    display: none;
  }
`;

export default Landing