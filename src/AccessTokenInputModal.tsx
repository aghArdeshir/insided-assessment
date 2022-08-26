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

const Form = styled.form`
  font-size: 16px;

  & input {
    font-size: inherit;
  }

  & input[type="text"] {
    min-width: 200px;
    padding: 10px;
  }

  & input[type="submit"] {
    margin-top: 10px;
  }
`;

const ModalContent = styled.dialog`
  padding: 50px;
`;

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
        <Form onSubmit={onFormSubmit}>
          <input
            autoFocus
            type="text"
            placeholder="GitHub Access Token key"
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <input disabled={!value} type="submit" />
        </Form>
      </ModalContent>
    </MoadlBackdrop>
  );
}
