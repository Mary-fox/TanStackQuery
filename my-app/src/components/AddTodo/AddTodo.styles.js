import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const AddButton = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #4caf50;
  color: white;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
