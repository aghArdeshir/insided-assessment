import styled from "styled-components";
import { AutoRefresh } from "./AutoRefresh";
import { ButtonWithKeyIcon } from "./RemoveMyAccessKeyButton";
import refreshIcon from "./icons/refresh.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  position: sticky;
  top: 0;

  background-color: #20232a;
  color: white;
`;

type Props = {
  removeAccessToken: () => void;
  refresh: () => void;
};

export function Header({ refresh, removeAccessToken }: Props) {
  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={refresh} title="Refresh Now">
          <img src={refreshIcon} alt="Refresh" width={32} height={32} />
        </button>
        <AutoRefresh
          style={{ marginLeft: 20, fontSize: 20 }}
          onRefresh={refresh}
        />
      </div>
      <ButtonWithKeyIcon onClick={removeAccessToken} />
    </Wrapper>
  );
}
