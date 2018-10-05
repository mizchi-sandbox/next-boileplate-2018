import * as React from "react";

import { Link } from "../../routes";

export default () => (
  <div>
    <h1>Next.js boilerplate 2018 late</h1>
    <Link route="index">
      <a>index</a>
    </Link>
    |
    <Link route="about">
      <a>about</a>
    </Link>
    |
    <Link route="dynamic">
      <a>dynamic</a>
    </Link>
    |
    <Link route="lazy">
      <a>lazy</a>
    </Link>
    |
    <Link route="item" params={{ id: "a" }}>
      <a>/item/a</a>
    </Link>
    |
    <Link route="item" params={{ id: "b" }}>
      <a>/item/b</a>
    </Link>
    |
    <Link route="connected">
      <a>/connected</a>
    </Link>
  </div>
);
