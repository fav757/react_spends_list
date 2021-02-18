import styled from 'styled-components';

const DataTableStyles = {
  Table: styled.table`
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
  `,

  List: styled.ol`
    padding: 0;
    margin: 0 1rem;
  `,
};

export default DataTableStyles;
