import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/notfound";

test("should test NotFoundPage correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
