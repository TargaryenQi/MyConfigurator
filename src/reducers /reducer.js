export const reducer = (state, action) => {
  switch (action.type) {
    case "NEXTSUBSTEP":
      return { ...state, currentSubstep: state.currentSubstep + 1 };
    default:
      return state;
  }
};
