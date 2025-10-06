import React from 'react';
import styled from 'styled-components';

const LoadingPlanet = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="blub" />
        <div className="blub" />
        <div className="blub" />
        <div className="blub" />
        <div className="blub" />
        <div className="blub" />
        <div className="blub" />
        <div className="blub" />
        <div className="blub" />
        <div className="blub" />
        <div className="moon">
          <div className="crater cr1" />
          <div className="crater cr2" />
          <div className="crater cr3" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    background: linear-gradient(45deg, #000000, #0a0a2e);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition:
      transform 0.3s,
      box-shadow 0.3s;
    box-shadow: 0 0 20px rgba(0, 0, 255, 0.1);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(100, 149, 237, 0.3);
  }

  /* Enhanced Moon with Craters */
  .moon {
    height: 80px;
    width: 80px;
    background: linear-gradient(145deg, #f0f0f0, #ffffff);
    border-radius: 50%;
    position: absolute;
    right: 55px;
    top: 9px;
    box-shadow:
      0 0 40px rgba(235, 235, 235, 0.5),
      inset -5px -5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Moon Craters */
  .crater {
    position: absolute;
    background: rgba(200, 200, 200, 0.3);
    border-radius: 50%;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .cr1 {
    width: 15px;
    height: 15px;
    top: 20px;
    left: 15px;
  }
  .cr2 {
    width: 20px;
    height: 20px;
    top: 45px;
    left: 40px;
  }
  .cr3 {
    width: 12px;
    height: 12px;
    top: 55px;
    left: 20px;
  }

  /* Enhanced Blubs (Falling Stars) */
  .blub {
    height: calc(3px * var(--j));
    width: calc(1px * var(--j));
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(173, 216, 230, 1) 100%);
    box-shadow:
      0 0 20px rgba(255, 255, 255, 0.8),
      0 0 30px rgba(173, 216, 230, 0.6);
    animation: animated linear infinite reverse;
    animation-duration: calc(40s / var(--i));
    rotate: 25deg;
    opacity: 0.8;
    filter: blur(calc(0.5px * var(--j)));
  }

  @keyframes animated {
    0% {
      transform: translateY(250px) scale(0.3) rotate(25deg);
    }
    100% {
      transform: translateY(-40px) scale(1.2) rotate(25deg);
    }
  }

  /* Hover Effects */
  .card:hover .moon {
    box-shadow:
      0 0 60px rgba(173, 216, 230, 0.7),
      inset -8px -8px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(145deg, #e0ffff, #ffffff);
  }

  .card:hover .blub {
    animation-duration: calc(30s / var(--i));
    opacity: 1;
  }
`;

export default LoadingPlanet;
