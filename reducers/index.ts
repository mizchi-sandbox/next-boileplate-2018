export type State = {
  foo: string;
};

const initialState: State = {
  foo: ""
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export default reducer;
