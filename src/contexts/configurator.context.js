import React, { createContext, useReducer } from "react";
import reducer from "../reducers/reducer";
import uuid from "uuid/v4";

const defaultConfigurations = {
  id: uuid(),
  steps: [
    { id: "STEP ONE", title: "STEP ONE" },
    { id: "STEP TWO", title: "STEP TWO" },
    { id: "STEP THREE", title: "STEP THREE" }
  ],
  substeps: [
    {
      id: "Choose Layout",
      title: "Choose Layout",
      description: "Choose the layout"
    },
    {
      id: "Configure Layout",
      title: "Configure Layout",
      description:
        "Configure the layout: Choose the viewers and widgets that you are going to use"
    },
    {
      id: "Configure Viewers",
      title: "Configure Veiwers",
      description: "Configure viewers"
    }
  ],
  currentStep: 0,
  currentSubstep: 0,
  completed: false,
  step1: {
    id: uuid(),
    completed: false,
    substep1: {
      id: uuid(),
      layout: "layout1",
      completed: false
    },
    substep2: {
      id: uuid(),
      completed: false,
      widgets: [],
      viewers: []
    },
    substep3: {
      id: uuid(),
      completed: false,
      viewerConfiguration: [
        {
          window: "Dafault",
          Orentation: "Axial"
        }
      ]
    }
  },
  step2: {
    id: uuid(),
    completed: false,
    substep1: {
      id: uuid(),
      layout: "layout1",
      completed: false
    },
    substep2: {
      id: uuid(),
      completed: false,
      widgets: [],
      viewers: []
    },
    substep3: {
      id: uuid(),
      completed: false,
      viewerConfiguration: [
        {
          window: "Dafault",
          Orentation: "Axial"
        }
      ]
    }
  },
  step3: {
    id: uuid(),
    completed: false,
    substep1: {
      id: uuid(),
      layout: "layout1",
      completed: false
    },
    substep2: {
      id: uuid(),
      completed: false,
      widgets: [],
      viewers: []
    },
    substep3: {
      id: uuid(),
      completed: false,
      viewerConfiguration: [
        {
          window: "Dafault",
          Orentation: "Axial"
        }
      ]
    }
  }
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
