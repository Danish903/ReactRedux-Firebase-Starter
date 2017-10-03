import React from "react";
import { LoginPage } from "../../components/LoginPage";
import { shallow } from "enzyme";

let wrapper, startLogin;
beforeEach(() => {
  startLogin= jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin}/>);
})
test("should render Login page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should call start login on button click" ,() => {
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
