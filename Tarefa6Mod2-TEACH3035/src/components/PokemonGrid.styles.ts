import styled from 'styled-components';
import { colors } from '../styles/theme';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export const LoadingContent = styled.div`
  text-align: center;
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border: 4px solid ${colors.primary[600]};
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.p`
  margin-top: 1rem;
  color: ${colors.primary[700]};
  font-weight: 600;
  font-size: 1.125rem;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export const ErrorContent = styled.div`
  text-align: center;
  background-color: ${colors.red[50]};
  border: 2px solid ${colors.red[300]};
  border-radius: 1rem;
  padding: 2rem;
  max-width: 28rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ErrorTitle = styled.p`
  color: ${colors.red[600]};
  font-weight: bold;
  font-size: 1.125rem;
`;

export const ErrorMessage = styled.p`
  color: ${colors.gray[700]};
  margin-top: 0.5rem;
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export const EmptyText = styled.p`
  color: ${colors.gray[600]};
  font-weight: 600;
  font-size: 1.125rem;
`;
