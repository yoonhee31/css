import styled from "styled-components";

const Radio = styled.input`
  margin-right: 12px;
  appearance: none;
  border: 1px solid #474d52;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  :checked {
    background-color: #474d52;
    /* background-image: */
  }
`;

const Box = () => {
  return (
    <Big>
      <Warp>
        <Title>
          <div>상품권</div>
        </Title>
        <Inner>
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <Radio type="radio" name="select" />
                </div>
                <span>전체</span>
              </label>
            </div>
            <div>
              <label style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <Radio type="radio" name="select" />
                </div>
                <span>전체</span>
              </label>
            </div>
          </div>
        </Inner>
      </Warp>
      <Warp>
        <Title>
          <div>상품권 이미지</div>
        </Title>
        <Inner>
          <div>IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII</div>
        </Inner>
      </Warp>
      <Warp>
        <Title>
          <div>상품권 이미지</div>
        </Title>
        <InnerWithPadding>
          <span>
            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
          </span>
        </InnerWithPadding>
      </Warp>
    </Big>
  );
};

export default Box;

const Big = styled.div`
  border-top: 0.5px solid #9b9b9b;
  border-right: 0.5px solid #9b9b9b;
  box-sizing: border-box;
`;

const Warp = styled.div`
  display: flex;
  /* align-items: center; */
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
