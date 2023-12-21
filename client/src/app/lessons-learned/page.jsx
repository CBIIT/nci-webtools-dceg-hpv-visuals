"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <Container className="py-3">
      <article className="shadow p-4 rounded">
        <h1 className="text-primary mb-3">Lessons learned</h1>
        <span>
          <b>
            <i> This page will be updated as new papers are published. </i>
          </b>
        </span>
        <hr />
      </article>
    </Container>
  );
}
