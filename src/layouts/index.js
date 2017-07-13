import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from "styled-components/primitives"
import theme from "../config/theme"
import Typography from "../elements/typography"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    const Header = styled.View`
      padding: ${theme.spacing.xxl};
    `;

    const Container = styled.View`
      padding: ${theme.spacing.regular};
    `;

    return (
      <div>
        <Helmet
          title="Product Designer &amp; Developer • Mariusz Ciesla"
          meta={[
            { name: "description", content: "Personal website of Mariusz Ciesla, a designer and developer based in Berlin, Germany." },
            { name: "keywords", content: "user experience, product design, designer, portfolio" },
          ]}
        />
        <Header>
          <Typography.h1>
            <Link
              to="/"
            >
              Gatsby
            </Link>
          </Typography.h1>
        </Header>
        <Container>
          {this.props.children()}
        </Container>
      </div>
    )
  }
}
