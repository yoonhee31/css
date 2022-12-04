import styled from "styled-components";
import React from "react";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
    Cell: ({ cell: { value } }: any) => <Balance values={value}></Balance>,
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
];

const Balance = ({ values }: any) => {
  return <a href="dddd">{values}</a>;
};
