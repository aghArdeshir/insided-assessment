import { getHumanReadableDate, ONE_SECOND } from "../dateService";

test("identifies right now", () => {
  expect(getHumanReadableDate(new Date())).toBe("Just now");
});

test("identifies 5 second", () => {
  expect(
    getHumanReadableDate(new Date(new Date().getTime() - 5 * ONE_SECOND))
  ).toBe("5 seconds ago");
});

test("identifies 75 seconds as 1 minute ago and 60*30 seconds as 30 minutes ago", () => {
  expect(
    getHumanReadableDate(new Date(new Date().getTime() - 75 * ONE_SECOND))
  ).toBe("1 minutes ago");

  expect(
    getHumanReadableDate(new Date(new Date().getTime() - 60 * 30 * ONE_SECOND))
  ).toBe("30 minutes ago");
});

test("identifies 3 hours ago correctly", () => {
  expect(
    getHumanReadableDate(
      new Date(new Date().getTime() - 60 * 60 * 3 * ONE_SECOND)
    )
  ).toBe("3 hours ago");
});

test("returns more than 1 day as it is", () => {
  const mockDate = new Date(new Date().getTime() - 60 * 60 * 60 * ONE_SECOND);
  expect(getHumanReadableDate(mockDate)).toBe(mockDate.toString());
});
