import React from 'react';
import styled from 'styled-components';

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

function DataTable() {
  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Category:</td>
          <td>Value:</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Products</td>
          <td>10$</td>
        </tr>
        <tr>
          <td>Products</td>
          <td>10$</td>
        </tr>
      </tbody>
    </StyledTable>
  );
}

export default DataTable;
