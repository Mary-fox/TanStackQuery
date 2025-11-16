import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background: #f8f8f8;
`;

export const Title = styled.div`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  font-size: 16px;
`;

export const Sub = styled.div`
  font-size: 12px;
  color: #666;
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #ff4d4d;
  color: white;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;