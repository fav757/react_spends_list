import React, { useContext, useState } from 'react';
import S from './DataTableStyles';
import { GlobalState } from '../../GlobalState';

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
          <S.List>
            {props.data.map((value) => (
              <li
                key={value.comment}
              >{`${value.comment} - ${value.amount}$`}</li>
            ))}
          </S.List>
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
    <S.Table>
      <thead>
        <tr>
          <td>Category:</td>
          <td>Value:</td>
          <td>O/h</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </S.Table>
  );
}

export default DataTable;
