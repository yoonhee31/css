import styled from "styled-components";
import * as React from "react";

export interface IBodyBox {
  title: string | string[];
  isTwoRows?: false | true;
  children?: any;
}

const BodyBox: React.FC<IBodyBox> = ({
  title,
  isTwoRows = false,
  children,
}) => {
  return (
    <>
      {isTwoRows ? (
        <Warp>
          <Title>
            <div>{title[0]}</div>
          </Title>
          <Inner>
            <div>{children[0]}</div>
          </Inner>
          <Title>
            <div>{title[1]}</div>
          </Title>
          <Inner>
            <div>{children[1]}</div>
          </Inner>
        </Warp>
      ) : (
        <Warp>
          <Title>
            <div>{title}</div>
          </Title>
          <Inner>
            <div>{children}</div>
          </Inner>
        </Warp>
      )}
    </>
  );
};

const Warp = styled.div`
  display: flex;
  border-bottom: 0.5px solid #9b9b9b;
`;

const Title = styled.div`
  min-width: 274px;
  min-height: 40px;
  background-color: #f3f4f5;
  text-align: center;
  border-right: 0.5px solid #9b9b9b;
  border-left: 0.5px solid #9b9b9b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  min-height: 40px;
  padding-left: 23px;
  background-color: white;
`;

const InnerWithPadding = styled(Inner)`
  padding: 10px 23px;
  word-break: break-all;
  /* white-space: pre-line; */
`;

export default BodyBox;
