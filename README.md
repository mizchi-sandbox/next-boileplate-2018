# next.js boilerplate 2018 late

## What's this?

- typescript
- next-routes
- jest
- prettier
- redux / next-redux-wrapper / withStore helper
- styled-components
- Async Loading Example
- ServiceWorker
- Show loading spinner on transition
- TODO: Handle Redirect in Server
- TODO: Auth
- TODO: Scroll Position Restore
- TODO: Add types to next
- TODO: Express Middleware
- TODO: API Server

## How to use redux on SSR

```tsx
import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "reducers";
import withStore from "../components/utils/withStore";

export default withStore(async (store: any) => {
  store.dispatch({ type: "FOO", payload: "foo-on-connected" });
})((_props: any) => {
  return (
    <div>
      <h1>Connceted</h1>
      <Connected />
    </div>
  );
});

const Connected = connect((s: RootState) => s.foo)(props => {
  return (
    <div>
      <span>store state</span>
      <pre>
        <code>{JSON.stringify(props)}</code>
      </pre>
    </div>
  );
});
```

`withStore` run in `getInitialProps` on server and client

## Deploy

```sh
npm i -g now
now
```

Example https://newnext-vqakgeaqus.now.sh/

## LICENSE

MIT
