import React from "react";
import styled from "styled-components";
import { DateDisplay } from "./DateDisplay";
import { T_Commit } from "../types/types";

const Wrapper = styled.div`
  background-color: #0d1117;
  color: #abb4be;
  font-size: 14px;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
`;

const AuthorLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin-right: 5px;
    border-radius: 50%;
  }
`;

type Props = { commit: T_Commit };

export function Commit({ commit }: Props) {
  const commitAuthorId = commit.commit.author?.name;
  const commitDate = commit.commit.author?.date || new Date();
  const commitMessage = commit.commit.message;
  const authorAvatar = commit.author?.avatar_url;

  return (
    <Wrapper>
      <h3 style={{ marginBottom: 0 }}>{commitMessage}</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        &nbsp;
        <AuthorLink
          href={`https://github.com/${commitAuthorId}`}
          target="_blank"
          style={{ color: "lightblue" }}
        >
          <img src={authorAvatar} alt={commitAuthorId} width={20} height={20} />
          {commitAuthorId}
        </AuthorLink>
        &nbsp;committed&nbsp;
        <DateDisplay date={new Date(commitDate)} />
      </div>
    </Wrapper>
  );
}
