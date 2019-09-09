import React, { Component } from "react";
import Container from "./Container";
import Nav from "./Nav";
import styled from "styled-components"
import * as Palette from "./Palette"

const StyledDiv = styled.div`
`

export default class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <StyledDiv>
        <Nav />
        <Container>{this.props.children}</Container>
      </StyledDiv>
    );
  }
}
