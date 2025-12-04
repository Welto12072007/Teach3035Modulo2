import styled from 'styled-components';
import { colors, shadows } from '../styles/theme';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const LoadButton = styled.button`
  background-color: ${colors.primary[700]};
  color: ${colors.white};
  font-weight: bold;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  box-shadow: ${shadows.lg};
  border: 1px solid rgba(167, 139, 250, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover:not(:disabled) {
    box-shadow: ${shadows.xl}, ${shadows.glow};
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SpinnerSVG = styled.svg`
  animation: spin 1s linear infinite;
  height: 1.25rem;
  width: 1.25rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
