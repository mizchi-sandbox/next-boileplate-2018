export type State = {
  foo: string;
};

const initialState: State = {
  foo: ""
};

const foo = (state = initialState, action: any) => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export default foo;
