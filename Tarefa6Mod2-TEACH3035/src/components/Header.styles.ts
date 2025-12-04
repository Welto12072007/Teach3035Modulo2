import styled from 'styled-components';
import { colors, shadows } from '../styles/theme';

export const HeaderContainer = styled.header`
  background-color: ${colors.primary[700]};
  color: ${colors.white};
  padding: 2rem 0;
  box-shadow: ${shadows.xl};
  position: relative;
  overflow: hidden;
`;

export const HeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${colors.black};
  opacity: 0.1;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -0.025em;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeaderLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${colors.white},
    transparent
  );
  opacity: 0.2;
`;
