import styled from 'styled-components';
import { Theme } from '../types/theme';

interface StyledProps {
  theme: Theme;
}

export const Container = styled.div<StyledProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Card = styled.div<StyledProps>`
  background-color: ${props => props.theme.colors.surface};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px ${props => props.theme.colors.shadow};
  max-width: 600px;
  width: 100%;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

export const Title = styled.h1<StyledProps>`
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  transition: color 0.3s ease;
`;

export const Subtitle = styled.p<StyledProps>`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 32px;
  line-height: 1.6;
  transition: color 0.3s ease;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const FeatureList = styled.ul<StyledProps>`
  list-style: none;
  margin: 24px 0;
`;

export const FeatureItem = styled.li<StyledProps>`
  padding: 12px 16px;
  margin: 8px 0;
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  border-left: 4px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
  }
`;
