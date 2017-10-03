import authReducer from "../../reducers/authReducer";

test("should set up default for auth value", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("should set up for auth login", () => {
  const uid = "dasdfasdf";
  const state = authReducer(undefined, {
    type: "LOGIN",
    uid
  });
  expect(state.uid).toBe(uid);
});

test("should set up for auth logout", () => {
  const currentState = { uid: "dadsfasdfasd" };
  const state = authReducer(currentState, { type: "LOGOUT" });
  expect(state).toEqual({});
});
