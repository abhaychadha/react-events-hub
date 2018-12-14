import React from "react";
import Search from "../search";
import { mount } from "enzyme";
import styles from '../../../styles/theme';
import { withStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const StyledSearch = withStyles(styles)(Search);
const InitialState = {
    Artists:{},
    Events: {}
  },
  middlewares = [thunk],
  mockStore = configureStore(middlewares),
  props = {};
  
describe("Search", () => {  
  const getStore = initState => mockStore(initState),
  getComponent = (initState,{}, props) => {
    let store = getStore(initState);
    return (
        <Provider store={store}>          
            <StyledSearch {...props} />          
        </Provider>
      );
  };
  test("Search Should Render Correctly", () => {    
    const mountComponent = mount(getComponent(InitialState, {}, props));
    expect(mountComponent).toMatchSnapshot();
  });

  test("Search button click", () => {    
    const mountComponent = mount(getComponent(InitialState, {}, props)),
        instance = mountComponent.find('Search').instance(),
        newState = {
            searchEnabled: true,
            searchText: "Ed Sheeran"
        },
        getArtistInfo = jest.spyOn(instance, "getArtistInfo");
        mountComponent.instance().forceUpdate();
        instance.setState(newState);        
        mountComponent.find("Button").first().simulate("click");
        expect(getArtistInfo).toHaveBeenCalled();
  });

  test("Clear button click", () => {    
    const mountComponent = mount(getComponent(InitialState, {}, props)),
        instance = mountComponent.find('Search').instance(),
        newState = {
            searchEnabled: true,
            searchText: "Ed Sheeran"
        },
        clearAll = jest.spyOn(instance, "clearAll");
        mountComponent.instance().forceUpdate();
        instance.setState(newState);        
        mountComponent.find("Button").last().simulate("click");
        expect(clearAll).toHaveBeenCalled();
  });

});
