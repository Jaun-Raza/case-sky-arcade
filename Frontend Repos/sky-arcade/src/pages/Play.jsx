import React from 'react'
import styled from 'styled-components'

const Play = () => {
    return (
        <PlayWrapper>
            <div className="main">
                <h1>How to Play</h1>
                <div className="info">
                    <p><span>Step 1. </span>Launch <b>Minecraft: Java Edition</b>, and click Multiplayer.</p>
                    <img src="/assets/minecraft-home-screen.png" alt="step-1" />
                    <p><span>Step 2. </span>Launch Click <b>Add Server</b> then add <b>play.skyarcade.net</b> to your server list</p>
                    <img src="/assets/minecraft-home-screen.png" alt="step-1" />
                    <p><span>Step 3. </span>Join the server and <b>play!</b></p>
                </div>
            </div>
        </PlayWrapper>
    )
}

const PlayWrapper = styled.section`
    width: 100%;
    height: fit-content;
    padding-bottom: 5rem;
    background-color: #0d0028;  
    padding-top: 8rem;
    padding: 2rem;

    .main {
        width: 80%;
        background-image: linear-gradient(22deg, #001369, #423c3d);
        border-radius: 1rem;
        padding: 1rem;
        margin: auto;

    h1 {
        color: #559cc9;
        text-align: center;
        font-size: 5rem;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: left;
        padding: 5rem 10rem;
        gap: 1rem;

        img {
            width: 100%;
            border-radius: 1rem;
        }
            
    p {
        font-size: 2rem;
        padding-top: 3rem; 
        color: white;
        text-align: left;
        font-family: 'Poppins', sans-serif;

        span {
            font-size: 3rem;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
        }
    }
}
    }


    @media(max-width: ${({theme}) => theme.media.mobile}) {
    .main {
      width: 100%;

      .info {
          padding: 1rem;
      }
    }

  }
`

export default Play