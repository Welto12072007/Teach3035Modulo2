import styled from 'styled-components';
import { Theme } from '../types/theme';

interface ButtonProps {
  theme: Theme;
}

export const ToggleButton = styled.button<ButtonProps>`
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: background-color 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ToggleIconWrapper = styled.div<ButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: left 0.3s ease;
  left: ${props => props.theme.name === 'light' ? '4px' : '44px'};
`;
