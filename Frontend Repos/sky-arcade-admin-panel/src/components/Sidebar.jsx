import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const [params, setParams] = useState();

  useEffect(() => {
    setParams(window.location.pathname);
  }, [])

  return (
    <Wrapper style={{ width: "20%" }}>
      <div className="slidebar">
        <NavLink to="/">
          <button style={{ backgroundColor: params === '/' ? '#434CE6' : '#010c0b' }} onClick={() => {
            setParams('/');
          }}>
            <i class="fa-solid fa-check-to-slot"></i>Announcements
          </button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    width: 20%;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    background-color: #010c0b;
    transition: all 0.5s ease-in-out 0s;

    .slidebar {
      padding: 1rem;
      padding-top: 3rem;
        button {
          width: 100%;
          height: 7rem;
          font-size: 2rem;
          color: white;
          background-color: #010c0b;
          border: none;
          text-align: justify;
          padding: 1rem;
          font-family: math;
          cursor: pointer;
          border-radius: 1rem;
          font-family: Open Sans;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          &:hover { 
            opacity: 0.5;
          } 

          i {
            font-size: 2.4rem;
            padding-right: 1rem;
          }
        }

      i {
        font-size: 4rem;
      }
    }
`;

export default Sidebar
