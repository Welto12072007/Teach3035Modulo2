import styled from 'styled-components';
import { colors, shadows } from '../styles/theme';

export const CardContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 1rem;
  box-shadow: ${shadows.card};
  overflow: hidden;
  border: 1px solid ${colors.primary[100]};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${shadows.cardHover}, ${shadows.glow};
    transform: translateY(-0.5rem);
  }
`;

export const CardImageContainer = styled.div`
  background: linear-gradient(135deg, ${colors.primary[50]} 0%, ${colors.white} 50%, rgba(59, 130, 246, 0.1) 100%);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, ${colors.primary[100]} 100%);
    opacity: 0.2;
  }
`;

export const CardImage = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 10;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  padding: 1.25rem;
`;

export const CardInfo = styled.div`
  text-align: center;
  margin-bottom: 0.75rem;
`;

export const CardId = styled.p`
  color: ${colors.primary[600]};
  font-size: 0.875rem;
  font-weight: bold;
`;

export const CardName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${colors.gray[800]};
  margin-top: 0.25rem;
`;

export const CardTypes = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

interface TypeBadgeProps {
  $bgColor: string;
}

export const TypeBadge = styled.span<TypeBadgeProps>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  color: ${colors.white};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: ${shadows.card};
  background-color: ${props => props.$bgColor};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
