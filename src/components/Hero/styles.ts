import { styled } from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(to bottom, rgba(36, 42, 46, 0.52), #0a0c2c80),
    url(https://images.unsplash.com/photo-1615202991324-fa31937b3f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80);
  background-position: center, bottom left;
  background-size: cover, cover;
  height: 100vh;
  color: #fafafc;
  padding: 15rem 3rem 6rem;

  @media (max-width: 576px) {
    background: linear-gradient(to bottom, rgba(36, 42, 46, 0.52), #0a0c2c80),
      url(https://images.unsplash.com/photo-1615202991324-fa31937b3f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80);
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
  }
`;

export const HeroInner = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  h1 {
    font-weight: 900;
    font-size: clamp(5rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
`;
