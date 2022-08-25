import React, { FormEventHandler, useCallback, useState } from "react";
import styled from "styled-components";

const MoadlBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000080;

  display: grid;
  align-items: center;
`;

const ModalContent = styled.dialog``; // TODO: to be styled later

type Props = {
  onSubmit: (accessToken: string) => void;
};

export function AccessTokenInputModal({ onSubmit }: Props) {
  const [value, setValue] = useState("");

  const onFormSubmit: FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      onSubmit(value);
    },
    [onSubmit, value]
  );

  return (
    <MoadlBackdrop>
      <ModalContent open>
        <form onSubmit={onFormSubmit}>
          <input
            autoFocus
            placeholder="GitHub Access Token key"
            onChange={(e) => setValue(e.target.value)}
            style={{ minWidth: 200, fontSize: 16, padding: 10 }}
          />
          <input type="submit" hidden />
        </form>
      </ModalContent>
    </MoadlBackdrop>
  );
}
