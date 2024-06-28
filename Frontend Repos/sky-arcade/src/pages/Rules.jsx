import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesWrapper>
      <div className="main">
        <h1>Rules</h1>
        <ul>
          <li><span>1)</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga quasi, hic odio ut magni ullam magnam expedita itaque alias amet fugit aperiam?</li>
          <li><span>2)</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga quasi, hic odio ut magni ullam magnam expedita itaque alias amet fugit aperiam?</li>
          <li><span>3)</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga quasi, hic odio ut magni ullam magnam expedita itaque alias amet fugit aperiam?</li>
          <li><span>4)</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga quasi, hic odio ut magni ullam magnam expedita itaque alias amet fugit aperiam?</li>
          <li><span>5)</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga quasi, hic odio ut magni ullam magnam expedita itaque alias amet fugit aperiam?</li>
        </ul>
      </div>
    </RulesWrapper>
  )
}

const RulesWrapper = styled.section`
    width: 100%;
    height: fit-content;
    padding-bottom: 5rem;
    background-color: #0d0028;  
    padding-top: 8rem;

  .main {
    width: 60%;
    background-image: linear-gradient(22deg, #001369, #423c3d);
    border-radius: 1rem;
    padding: 1rem;
    margin: auto;

    h1 {
    font-family: 'Poppins', sans-serif;
    color: #559cc9;
    text-align: center;
  }

  ul {
    text-align: center;
    padding-top: 3rem;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    li {
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;

        span {
            color: #559cc9;
        }
    }
  }
  }

  @media(max-width: ${({theme}) => theme.media.mobile}) {
    .main {
      width: 90%;
    }
  }
  
`;

export default Rules