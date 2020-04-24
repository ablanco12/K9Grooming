import React from "react";
import { Tab } from "semantic-ui-react";
import SearchModuleExpected from "../SearchModuleExpected/SearchModuleExpected";
import SearchModuleCheckedIn from "../SearchModuleCheckedIn/SearchModuleCheckedIn";
import SearchModuleAllCustomers from "../SearchModuleAllCustomers/SearchModuleAllCustomers";

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
  },
  {
    menuItem: "All Customers",
    render: () => (
      <Tab.Pane attached={false}>
        <SearchModuleAllCustomers />
      </Tab.Pane>
    )
  }
];

const SearchTabs = () => <Tab menu={{ pointing: true }} panes={panes} />;

export default SearchTabs;
