import styled from 'styled-components';
import { colors } from './styles/theme';

export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.gray[50]} 0%, rgba(245, 243, 255, 0.3) 50%, rgba(59, 130, 246, 0.1) 100%);
`;

export const MainContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Footer = styled.footer`
  background-color: ${colors.primary[700]};
  color: ${colors.white};
  padding: 2rem 0;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
`;

export const FooterOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${colors.black};
  opacity: 0.1;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const FooterSubText = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  opacity: 0.9;
`;

export const FooterLink = styled.a`
  text-decoration: underline;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.white};
  }
`;
