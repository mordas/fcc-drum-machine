export default (state, action) => {
    switch (action.type) {
      case "booom":
        return {
          ...state,
          display: action.payload
        };
      default:
        return state;
    }
  };