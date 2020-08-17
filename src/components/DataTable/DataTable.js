import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;

  tr {
    border-bottom: 1px solid #c8c8c8;
  }

  tbody tr:last-child {
    border-bottom: none;
  }

  td {
    padding: 0.5rem 1rem;
    width: 50%;
  }

  td:first-child {
    border-right: 1px solid #c8c8c8;
  }
`;

function TableRow(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.data.reduce((a, b) => a + b.amount, 0)}</td>
    </tr>
  );
}

function DataTable() {
  const { state } = useContext(GlobalState);
  const database = state[state.activeType];

  const rows = [];
  for (let key in database) {
    rows.push(<TableRow key={key} title={key} data={database[key]} />);
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Category:</td>
          <td>Value:</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </StyledTable>
  );
}

export default DataTable;
