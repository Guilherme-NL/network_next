import styled from "styled-components";
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #7695ec;
  border-radius: 15px 15px 0px 0px;
  padding: 24px;

  h1 {
    color: #ffffff;
  }
`;

const EditIcons = styled.div`
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

const Body = styled.div`
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

const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Posts() {
  return (
    <Container>
      <Header>
        <h1>My First Post at CodeLeap Network</h1>
        <EditIcons>
          <TbTrashXFilled className="icon" />
          <FaRegEdit className="icon" />
        </EditIcons>
      </Header>
      <Body>
        <BodyHeader>
          <p className="post_owner">@Victor</p>
          <p className="post_time">25 minutes ago</p>
        </BodyHeader>

        <br />
        <p className="post_content">
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. <br />{" "}
          <br /> Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed
          cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
          sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia
          erat.
        </p>
      </Body>
    </Container>
  );
}
