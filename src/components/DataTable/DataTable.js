import React from 'react';
import styled from 'styled-components';

function DataTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Category:</th>
          <th>Value:</th>
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
    </table>
  );
}

export default DataTable;
