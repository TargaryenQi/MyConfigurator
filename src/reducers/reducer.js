const reducer = (state, action) => {
  switch (action.type) {
    case "NEXTSUBSTEP":
      return {
        ...state,
        currentSubstep:
          state.currentSubstep === 2 ? 0 : state.currentSubstep + 1
      };
    case "LASTSUBSTEP":
      return {
        ...state,
        currentSubstep:
          state.currentSubstep === 0 ? 2 : state.currentSubstep - 1
      };
    case "RESET":
      return {
        ...state,
        currentSubstep: 0
      };
    case "NEXTSTEP":
      return {
        ...state,
        currentStep:
          state.currentStep === 2 ? state.currentStep : state.currentStep + 1
      };
    case "CHOOSESTEP":
      return {
        ...state,
        currentStep: action.newValue
      };
    case "TOGGLELAYOUT":
      return {
        ...state,
        substeps: state.substeps.map(substep =>
          substep.index === action.substepIndex
            ? { ...substep, layout: action.layout }
            : substep
        )
      };
    default:
      return state;
  }
};

export default reducer;
