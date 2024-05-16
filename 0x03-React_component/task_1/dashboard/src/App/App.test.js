import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
  });

  it("contains Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("contains Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("contains Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("contains Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it("does not contain CourseList when not logged in", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

  it("contains CourseList and not Login when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });

  it("calls logOut and shows alert when Ctrl+H is pressed", () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = shallow(<App logOut={logOutMock} />);

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
    
    alertMock.mockRestore();
  });
});
