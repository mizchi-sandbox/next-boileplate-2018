export type State = {
  loading: boolean;
  error: null | Error;
};

const initialState: State = {
  loading: false,
  error: null
};

const router = (state = initialState, action: any) => {
  switch (action.type) {
    case "router:routing-started": {
      return { ...state, loading: true };
    }
    case "router:routing-complete": {
      return { ...state, loading: false };
    }
    case "router:routing-error": {
      return { ...state, loading: false, error: new Error("...") };
    }
    default: {
      return state;
    }
  }
};

export default router;
