import React from "react";
import {shallow} from "enzyme";
import Dashboard from "../../components/dashboard";

test("should set up test from dashboard correctly", () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});
