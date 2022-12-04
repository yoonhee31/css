import React, { useMemo } from "react";
import styled from "styled-components";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { usePagination, useTable } from "react-table";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  // 한번만 호출해야 하기 때문에 useMemo로 감싸주고 두번째 인자에 []를 넣어준다
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    // nextPage,
    // previousPage,
    // canNextPage,
    // canPreviousPage,
    // pageOptions,
    // gotoPage,
    // pageCount,
    // setPageSize,
    // state,
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    usePagination
  );

  // const { pageIndex, pageSize } = state;

  return (
    <div>
      {/* react-table로 table을 만들싶은경우 getTableProps로 선언해줘야한다 */}
      <TableSheet {...getTableProps()}>
        <thead>
          {/* getHeaderGroupProps를 통해  columns에 넣어줬던 header 배열을 호출한다 */}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // getRowProps는 각 row data를 호출해낸다
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  // getCellProps는 각 cell data를 호출해낸다
                  <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                ))}
              </tr>
            );
          })}
        </tbody>
        {/* {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </tr>
            );
          })}
        </tbody> */}
      </TableSheet>
      {/* <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          {pageIndex + 1} / {pageOptions.length}
        </span>
        <span>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
      <div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}개 씩 보기
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
};

export default PaginationTable;

const TableSheet = styled.table`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 30px;
  border-collapse: collapse;
  border-top: 0.7px solid black;
  text-align: center;
`;

const Th = styled.th`
  padding: 30px 20px;
  background-color: #ececec;
`;

const Td = styled.td`
  padding: 20px 20px;
  font-weight: 200;
  border-bottom: 0.7px solid #4d4d4d;
`;
