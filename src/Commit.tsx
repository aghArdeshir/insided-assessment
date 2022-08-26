import React from "react";
import styled from "styled-components";
import { T_Commit } from "./types";

const Wrapper = styled.div`
  background-color: lightgray;
  padding: 20px;
  margin: 20px;
  border: 1px solid darkgray;
  border-radius: 5px;
`;

const DateDisplay = styled.h5`
  color: #00000080;
`;

const Author = styled.a``;

type Props = { commit: T_Commit };

export function Commit({ commit }: Props) {
  const commitAuthorId = commit.commit.author?.name;
  const commitDate = commit.commit.author?.date;
  const commitMessage = commit.commit.message;

  return (
    <Wrapper>
      <h3 style={{ marginBottom: 0 }}>{commitMessage}</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <DateDisplay>{commitDate}</DateDisplay>&nbsp;
        <span> by </span>
        &nbsp;
        <Author href={`https://github.com/${commitAuthorId}`} target="_blank">
          {commitAuthorId}
        </Author>
      </div>
    </Wrapper>
  );
}
