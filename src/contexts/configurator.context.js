import React, { createContext, useReducer } from "react";
import reducer from "../reducers/reducer";
import uuid from "uuid/v4";

const viewers = ["Axial", "Sagital", "Coronal"];

const defaultConfigurations = {
  id: uuid(),
  currentStep: 0,
  currentSubstep: 0,
  completed: false,
  steps: [
    {
      id: uuid(),
      index: 0,
      title: "STEP ONE",
      completed: false,
      substeps: [0, 1, 2]
    },
    {
      id: uuid(),
      index: 1,
      title: "STEP TWO",
      completed: false,
      substeps: [3, 4, 5]
    },
    {
      id: uuid(),
      index: 2,
      title: "STEP THREE",
      completed: false,
      substeps: [6, 7, 8]
    }
  ],
  layouts: [0, 0, 0],
  substeps: [
    {
      id: uuid(),
      index: 0,
      title: "Choose Layout",
      description: "Choose the layout",
      layout: 0,
      completed: false
    },
    {
      id: uuid(),
      index: 1,
      title: "Configure Layout",
      description:
        "Configure the layout: Choose the viewers and widgets that you are going to use",
      widgets: [],
      viewers: [0],
      completed: false
    },
    {
      id: uuid(),
      index: 2,
      title: "Configure Veiwers",
      description: "Configure viewers",
      window: 0,
      orientation: 0,
      completed: false
    }
  ]
};

export const ConfiguratorContext = createContext();
export const DispatchContext = createContext();

export function ConfiguratorProvider(props) {
  const [configurations, dispatch] = useReducer(reducer, defaultConfigurations);

  return (
    <ConfiguratorContext.Provider value={configurations}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ConfiguratorContext.Provider>
  );
}
