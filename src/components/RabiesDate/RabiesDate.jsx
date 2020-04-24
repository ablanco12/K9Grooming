import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";
import { Form } from "semantic-ui-react";

class DateTimeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: ""
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <Form>
        <DateInput
          name="date"
          placeholder="Date"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default DateTimeForm;
