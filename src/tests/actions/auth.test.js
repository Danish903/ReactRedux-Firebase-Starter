import {login, logout} from "../../actions/auth";

test("should set up test for login", () => {
  const uid = "dasdfasdf";
  const actions = login(uid);
  expect(actions).toEqual({
    type: "LOGIN",
    uid
  });
});
test("should set up test for logout", () => {
  const actions = logout();
  expect(actions).toEqual({
    type: "LOGOUT"
  });
});
