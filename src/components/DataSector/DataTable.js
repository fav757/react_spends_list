import React, { useContext, useState } from 'react';
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
    padding: 0.3rem 0.6rem;
    width: 50%;
  }

  td:not(:last-child) {
    border-right: 1px solid #c8c8c8;
  }

  ol {
    padding: 0;
    margin: 0 1rem;
  }
`;

function CellList(props) {
  return (
    <ol>
      {props.data.map((value) => (
        <li key={value.comment}>{`${value.comment} - ${value.amount}$`}</li>
      ))}
    </ol>
  );
}

function TableRow(props) {
  const [expand, setExpand] = useState(true);
  const handleClick = () => setExpand(!expand);
  const arrowTransform = expand ? '0' : '180';

  return (
    <tr>
      <td>{props.title}</td>
      <td>
        {expand ? (
          props.data.reduce((a, b) => a + b.amount, 0)
        ) : (
          <CellList data={props.data} />
        )}
      </td>
      <td>
        <i
          style={{ transform: `rotate(${arrowTransform}deg)` }}
          onClick={handleClick}
          className='fas fa-angle-down'
        ></i>
      </td>
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
          <td>O/h</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </StyledTable>
  );
}

export default DataTable;
