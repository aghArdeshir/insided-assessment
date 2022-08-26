import React from "react";
import keyIcon from "../icons/key.png";

type Props = {
  onClick: () => void;
};

export function ButtonWithKeyIcon({ onClick }: Props) {
  return (
    <button onClick={onClick} title="Remove GitHub Access Token key">
      <img width={32} height={32} src={keyIcon} alt="Key" />
    </button>
  );
}
