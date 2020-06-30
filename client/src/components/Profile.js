import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Container, Divider } from "semantic-ui-react";

export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Divider />
        <h1>Profile</h1>
      </Container>
    );
  }
}
