import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Typography from "../elements/typography";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Typography.h1>Hi people</Typography.h1>
        <Typography.p>Welcome to your new Gatsby site.</Typography.p>
        <Typography.p>Now go build something great.</Typography.p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}
