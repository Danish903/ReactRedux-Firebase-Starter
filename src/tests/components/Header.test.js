import { shallow } from "enzyme";
import React from "react";
import { Header } from "../../components/header";
let wrapper, startLogout;
beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout ={startLogout}/>);
});
test("should test Header component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogout on button click", () => {
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
