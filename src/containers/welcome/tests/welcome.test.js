import React from "react";
import Welcome from "../welcome";
import { mount } from "enzyme";
import styles from "../../../styles/theme";
import { withStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const StyledWelcome = withStyles(styles)(Welcome);
const InitialState = {
    Artist: {
      name: "Imagine Dragons",      
    },
    Events: {
        records:[]
    }
  },
  middlewares = [thunk],
  mockStore = configureStore(middlewares),
  props = {};

describe("Welcome", () => {
  const getStore = initState => mockStore(initState),
    getComponent = (initState, {}, props) => {
      let store = getStore(initState);
      return (
        <Provider store={store}>
          <StyledWelcome {...props} />
        </Provider>
      );
    };
  test("Welcome Should Render Correctly", () => {
    const mountComponent = mount(getComponent(InitialState, {}, props));
    expect(mountComponent).toMatchSnapshot();
  });
});
