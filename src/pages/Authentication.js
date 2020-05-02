import React from "react";
import Form from "../components/Form";

export default function Authentication({ page }) {
  return (
    <section className="Auth">
      <Form page={page} />
    </section>
  );
}
