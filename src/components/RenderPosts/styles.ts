import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 70px;
  width: 100%;
  background-color: #7695ec;
  border-radius: 15px 15px 0px 0px;
  padding: 24px;

  h1 {
    color: #ffffff;
  }
`;

export const EditIcons = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;

  .icon {
    color: #ffffff;
    width: 25px;
    height: auto;
    cursor: pointer;
  }
`;

export const Body = styled.div`
  padding: 24px;

  .post_owner {
    font-weight: 700;
    color: #777777;
    font-size: 18px;
  }

  .post_time {
    font-weight: 400;
    color: #777777;
    font-size: 18px;
  }

  .post_content {
    font-weight: 400;
    font-size: 18px;
    color: #000000;
  }
`;

export const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
