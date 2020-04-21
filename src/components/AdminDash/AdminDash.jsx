import React, { Component } from "react";
import {
  Divider,
  Grid,
  Button,
  Statistic,
  Table,
  Modal,
  Image,
  Header,
  Dropdown,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
// import SearchModule from "../SearchModuleExpected/SearchModuleExpected";
import SearchTabs from "../SearchTabs/SearchTabs";

class AdminDash extends Component {
  state = {};

  render() {
    const options = [
      { key: "angular", text: "Angular", value: "angular" },
      { key: "css", text: "CSS", value: "css" },
      { key: "design", text: "Graphic Design", value: "design" },
      { key: "ember", text: "Ember", value: "ember" },
      { key: "html", text: "HTML", value: "html" },
      { key: "ia", text: "Information Architecture", value: "ia" },
      { key: "javascript", text: "Javascript", value: "javascript" },
      { key: "mech", text: "Mechanical Engineering", value: "mech" },
      { key: "meteor", text: "Meteor", value: "meteor" },
      { key: "node", text: "NodeJS", value: "node" },
      { key: "plumbing", text: "Plumbing", value: "plumbing" },
      { key: "python", text: "Python", value: "python" },
      { key: "rails", text: "Rails", value: "rails" },
      { key: "react", text: "React", value: "react" },
      { key: "repair", text: "Kitchen Repair", value: "repair" },
      { key: "ruby", text: "Ruby", value: "ruby" },
      { key: "ui", text: "UI Design", value: "ui" },
      { key: "ux", text: "User Experience", value: "ux" }
    ];
    return (
      <div>
        <h1>Dashboard</h1>
        <h4>This is your control center.</h4>
        <Grid columns={3} relaxed="very">
          <Grid.Column>
            <Modal trigger={<Button>Quick Check-in</Button>}>
              <Modal.Header>Quick Check In</Modal.Header>
              <Modal.Content>
                <h3>Choose Type</h3>
                <Dropdown
                  fluid
                  multiple
                  onChange={this.handleChange}
                  onSearchChange={this.handleSearchChange}
                  //   options={stateOptions}
                  placeholder=""
                  search
                  //   searchQuery={searchQuery}
                  selection
                  //   value={value}
                />
                <h3>Choose Animal(s)</h3>
                <Dropdown
                  placeholder=""
                  fluid
                  multiple
                  selection
                  options={options}
                />
              </Modal.Content>
              <Modal.Actions>
                <Button>Cancel</Button>
                <Button primary>
                  Add! <Icon name="chevron right" />
                </Button>
              </Modal.Actions>
            </Modal>
            <br></br>
            <Link to="/add_client">
              <Button>New Customer Form</Button>
            </Link>
            <br />
            <Button>Calendar</Button>
          </Grid.Column>
          <Grid.Column>
            <div>
              <Statistic size="small">
                <Statistic.Label>IN</Statistic.Label>
                <Statistic.Value>20</Statistic.Value>
              </Statistic>
              <Statistic size="small">
                <Statistic.Label>OUT</Statistic.Label>
                <Statistic.Value>19</Statistic.Value>
              </Statistic>
              <Statistic size="small">
                <Statistic.Label>O/N</Statistic.Label>
                <Statistic.Value>6</Statistic.Value>
              </Statistic>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div>
              <Table basic="very">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>3 Total Expected</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>2 DayCare / Full Day</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>1 Grooming Services</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </Grid.Column>
        </Grid>
        <Divider section />
        <SearchTabs />
      </div>
    );
  }
}

export default AdminDash;
