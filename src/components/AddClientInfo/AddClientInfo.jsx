import React, { Component } from "react";
import { Button, Form, Container, Dropdown, Label } from "semantic-ui-react";
import RabiesDate from "../RabiesDate/RabiesDate";

const breeds = [
  { key: "angular", text: "Australian Cattle Dog", value: "angular" },
  { key: "css", text: "Australian Shepherd", value: "css" },
  { key: "design", text: "Bearded Collie", value: "design" },
  { key: "ember", text: "Belgian Malinois", value: "ember" },
  { key: "html", text: "Belgian Sheepdog", value: "html" },
  { key: "ia", text: "Belgian Tervuren", value: "ia" },
  { key: "javascript", text: "Border Collie", value: "javascript" },
  { key: "mech", text: "Bouvier des Flandres", value: "mech" },
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

// all options will be the breeds and will be posted to the db

class AddClientInfo extends Component {
  state = { breeds };
  handleAddition = (e, { value }) => {
    this.setState(prevState => ({
      options: [{ text: value, value }, ...prevState.breeds]
    }));
  };

  handleChange = (e, { value }) => this.setState({ currentValue: value });

  render() {
    const { currentValue } = this.state;
    return (
      <Container>
        <Form>
          <h1>Customer Info</h1>
          <Form.Group unstackable widths={2}>
            <Form.Input label="First name" placeholder="First name" />
            <Form.Input label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Email" placeholder="Email" />
            <Form.Input label="Phone" placeholder="(xxx)xxx-xxxx" />
            <Form.Input label="Alt. Phone" placeholder="(xxx)xxx-xxxx" />
          </Form.Group>
          <h1>Pet Info</h1>
          <Form.Group widths={2}>
            <Form.Input label="Pet Name" placeholder="Pet Name" />
            <Form.Input label="Color" placeholder="Color" />
          </Form.Group>
          <Dropdown
            label="Breed"
            options={this.state.options}
            placeholder="BREED"
            search
            selection
            fluid
            allowAdditions
            value={currentValue}
            onAddItem={this.handleAddition}
            onChange={this.handleChange}
          />
          <br></br>

          <RabiesDate />

          <br></br>
          <Button icon="add" />
          <br></br>
          <br></br>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default AddClientInfo;
