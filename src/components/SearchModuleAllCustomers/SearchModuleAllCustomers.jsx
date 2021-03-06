import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import {
  Search,
  Grid,
  Header,
  Segment,
  Table,
  Button,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const initialState = { isLoading: false, results: [], value: "" };

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, "$")
}));

export default class SearchModuleAllCustomers extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <div>
        <Grid>
          <Search
            size="big"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            {...this.props}
            placeholder="Search"
          />
          <Grid.Column width={6}></Grid.Column>

          <Grid.Column width={16}>
            <Segment>
              <Table striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                    <Table.HeaderCell>Animal</Table.HeaderCell>
                    <Table.HeaderCell>Owner</Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Services</Table.HeaderCell>
                    <Table.HeaderCell>Start</Table.HeaderCell>
                    <Table.HeaderCell>End</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Button icon>
                        <Icon name="check" title="Check in" />
                      </Button>

                      <Link to="/client_info">
                        <Button icon>
                          <Icon name="address card" title="More Info" />
                        </Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>Meatball (American Bulldog)</Table.Cell>
                    <Table.Cell>John Laiki</Table.Cell>
                    <Table.Cell>Grooming Services</Table.Cell>
                    <Table.Cell>Grooming | Full Groom</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Button icon>
                        <Icon name="check" title="Check in" />
                      </Button>
                      <Link to="/client_info">
                        <Button icon>
                          <Icon name="address card" title="More Info" />
                        </Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>Ali (Wolf)</Table.Cell>
                    <Table.Cell>Mark Duben</Table.Cell>
                    <Table.Cell>Grooming Services</Table.Cell>
                    <Table.Cell>Grooming | Full Groom</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Button icon>
                        <Icon name="check" title="Check in" />
                      </Button>
                      <Link to="/client_info">
                        <Button icon>
                          <Icon name="address card" title="More Info" />
                        </Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>Dog (Daisy)</Table.Cell>
                    <Table.Cell>John Laiki</Table.Cell>
                    <Table.Cell>Grooming Services</Table.Cell>
                    <Table.Cell>Grooming | Full Groom</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Button icon>
                        <Icon name="check" title="Check in" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell>Dog (Daisy)</Table.Cell>
                    <Table.Cell>John Laiki</Table.Cell>
                    <Table.Cell>Grooming Services</Table.Cell>
                    <Table.Cell>Grooming | Full Groom</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Button icon>
                        <Icon name="check" title="Check in" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell>Dog (Daisy)</Table.Cell>
                    <Table.Cell>John Laiki</Table.Cell>
                    <Table.Cell>Grooming Services</Table.Cell>
                    <Table.Cell>Grooming | Full Groom</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Button icon>
                        <Icon name="check" title="Check in" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell>Dog (Daisy)</Table.Cell>
                    <Table.Cell>John Laiki</Table.Cell>
                    <Table.Cell>Grooming Services</Table.Cell>
                    <Table.Cell>Grooming | Full Groom</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Button icon>
                        <Icon name="check" title="Check in" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell>Dog (Daisy)</Table.Cell>
                    <Table.Cell>John Laiki</Table.Cell>
                    <Table.Cell>Grooming Services</Table.Cell>
                    <Table.Cell>Grooming | Full Groom</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Button icon>
                        <Icon name="check" title="Check in" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell>Dog (Daisy)</Table.Cell>
                    <Table.Cell>John Laiki</Table.Cell>
                    <Table.Cell>Grooming Services</Table.Cell>
                    <Table.Cell>Grooming | Full Groom</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              {/* <Header>State</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify(source, null, 2)}
            </pre> */}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
