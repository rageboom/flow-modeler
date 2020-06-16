import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
  dirty: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    {" "}
    Hello from {props.compiler} and {props.framework} {props.dirty}!{" "}
  </h1>
);
