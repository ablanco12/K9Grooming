import React from "react";
import { Tab } from "semantic-ui-react";
import SearchModuleExpected from "../SearchModuleExpected/SearchModuleExpected";
import SearchModuleCheckedIn from "../SearchModuleCheckedIn/SearchModuleCheckedIn";

const panes = [
  {
    menuItem: "Expected Appointments",
    render: () => (
      <Tab.Pane attached={false}>
        <SearchModuleExpected />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Checked-In",
    render: () => (
      <Tab.Pane attached={false}>
        <SearchModuleCheckedIn />
      </Tab.Pane>
    )
  }
];

const SearchTabs = () => <Tab menu={{ pointing: true }} panes={panes} />;

export default SearchTabs;
