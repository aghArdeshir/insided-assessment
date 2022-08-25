import React from "react";
import styled from "styled-components";
import keyIcon from "./key.png";

type Props = {
  onClick: () => void;
};

const CornerButton = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
`;

export function ButtonWithKeyIcon({ onClick }: Props) {
  return (
    <CornerButton onClick={onClick} title="Remove GitHub Access Token key">
      <img width={32} height={32} src={keyIcon} alt="Key" />
    </CornerButton>
  );
}
