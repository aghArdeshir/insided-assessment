import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { AccessTokenInputModal } from "../Components/AccessTokenInputModal";

test("[a11y] opens a dialog", () => {
  render(<AccessTokenInputModal onSubmit={() => {}} />);
  expect(screen.getByRole("dialog")).toBeVisible();
});

test("[a11y] shows a form", () => {
  render(<AccessTokenInputModal onSubmit={() => {}} />);
  // ignoring error because for accessibility reasons we need to make sure we
  // are rendering form
  //eslint-disable-next-line testing-library/no-node-access
  expect(document.querySelector("form")).toBeVisible();
});

test("calls onSubmit callback with correct values", () => {
  const onSubmit = jest.fn();
  render(<AccessTokenInputModal onSubmit={onSubmit} />);

  const input = screen.getByRole("textbox");
  //eslint-disable-next-line testing-library/no-node-access
  const form = input.closest("form");

  fireEvent.change(input, { target: { value: "23" } });
  form?.submit();

  expect(onSubmit).toBeCalledWith("23");
});
