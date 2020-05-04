import React from "react";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Authentication({ page }) {
  const loggedIn = useSelector((store) => store.authentication.loggedIn);

  return (
    <section className="Auth">
      {loggedIn !== false ? <Redirect to="/" /> : ""}

      <Form page={page} />
    </section>
  );
}
