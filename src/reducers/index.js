export default (state, action) => {
    switch (action.type) {
      case "booom":
        return {
          ...state,
          displayMessage: action.payload,
        };
      default:
        return state;
    }
  };
