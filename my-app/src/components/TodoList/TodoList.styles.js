import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 16px;
`;

export const RefreshButton = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #2196f3;
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin-top: 12px;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;