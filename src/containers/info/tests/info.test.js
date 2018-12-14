import React from "react";
import Info from "../info";
import { mount } from "enzyme";
import styles from "../../../styles/theme";
import { withStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const StyledInfo = withStyles(styles)(Info);
const InitialState = {
    Artist: {
      thumb_url: "https://s3.amazonaws.com/bit-photos/thumb/8913887.jpeg",
      mbid: "",
      facebook_page_url: "https://www.facebook.com/ImagineDragons",
      image_url: "https://s3.amazonaws.com/bit-photos/large/8913887.jpeg",
      name: "Imagine Dragons",
      id: "330488",
      tracker_count: 3616867,
      upcoming_event_count: 1,
      url:
        "https://www.bandsintown.com/a/330488?came_from=267&app_id=asdsafdsfdsfaa-sdsfdsf-sdfdsfsdfs"
    },
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

describe("Info", () => {
  const getStore = initState => mockStore(initState),
    getComponent = (initState, {}, props) => {
      let store = getStore(initState);
      return (
        <Provider store={store}>
          <StyledInfo {...props} />
        </Provider>
      );
    };
  test("Info Should Render Correctly", () => {
    const mountComponent = mount(getComponent(InitialState, {}, props));
    expect(mountComponent).toMatchSnapshot();
  });
});
