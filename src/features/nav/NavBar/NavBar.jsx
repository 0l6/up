import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img
              src="https://pbs.twimg.com/profile_images/1043534670909132800/KLmuWdQC_400x400.jpg"
              alt="logo"
            />
            UP
          </Menu.Item>
          <Menu.Item name="Events" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Create Event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
