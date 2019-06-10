import React from "react";
import Welcome from "../welcome";
import { shallow, mount } from "enzyme";
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
  // let welcomeComponent;
  
  // beforeEach(() => {
  //   welcomeComponent = shallow(<welcome />);
  // });

  it("renders without crashing", () =>{
    const getStore = initState => mockStore(initState), store = getStore(InitialState);
    let welcomeComponent = shallow(
    <Provider store={store}>
      <Welcome />
    </Provider>);
    expect(welcomeComponent).toMatchSnapshot();
  })
  // const getStore = initState => mockStore(initState),
  //   getComponent = (initState, {}, props) => {
  //     let store = getStore(initState);
  //     return (
  //       <Provider store={store}>
  //         <StyledWelcome {...props} />
  //       </Provider>
  //     );
  //   };
  // it("Welcome Should Render Correctly", () => {
  //   const mountComponent = mount(getComponent(InitialState, {}, props));
  //   expect(mountComponent).toMatchSnapshot();
  // });
});
