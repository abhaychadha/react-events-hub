import React from "react";
import Events from "../events";
import { mount, shallow } from "enzyme";
import { eventStyle } from "../events.style";
import { withStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const StyledEvents = withStyles(eventStyle)(Events);
const InitialState = {
    Events: {
      records: [
        {
          offers: [
            {
              type: "Tickets",
              url:
                "https://www.bandsintown.com/t/100594840?app_id=asdsafdsfdsfaa-sdsfdsf-sdfdsfsdfs&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              status: "available"
            }
          ],
          venue: {
            name: "Visarno Arena",
            country: "Italy",
            region: "",
            city: "Florence",
            latitude: "43.7817552",
            longitude: "11.2245698"
          },
          datetime: "2019-06-02T20:30:00",
          on_sale_datetime: "",
          description: "",
          lineup: ["Imagine Dragons"],
          id: "100594840",
          artist_id: "330488",
          url:
            "https://www.bandsintown.com/e/100594840?app_id=asdsafdsfdsfaa-sdsfdsf-sdfdsfsdfs&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event"
        }
      ]
    }
  },
  middlewares = [thunk],
  mockStore = configureStore(middlewares),
  props = {};
  
describe("Events", () => {  
  const getStore = initState => mockStore(initState),
  getComponent = (initState,{}, props) => {
    let store = getStore(initState);
    return (
        <Provider store={store}>          
            <StyledEvents {...props} />          
        </Provider>
      );
  };
  test("Events Should Render Correctly", () => {    
    const mountComponent = shallow(getComponent(InitialState, {}, props));
    expect(mountComponent).toMatchSnapshot();
  });


  it("Event accordian expand validation", () => {
    const wrapper = mount(getComponent(InitialState, {}, props));
    wrapper.find('ExpandMoreIcon').simulate('mouseDown', { button: 0 });
    expect(wrapper.find('ExpandMoreIcon').length).toEqual(1);
  });
});
