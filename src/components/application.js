import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/nav";
import applicationStyles from '../styles/application.module.scss';

export default ({children}) => (
  <div className={applicationStyles.container}>
    <Helmet>
      <meta charset="utf-8" />
      <title>Bulma Test</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Nav />
    <section>
      {children}
    </section>
  </div>
);