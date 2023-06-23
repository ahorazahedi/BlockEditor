import React, { useState } from "react";

import { useHotkeys } from "react-hotkeys-hook";
import { useDispatch, useStore } from "react-redux";
import { setTerminalState } from "./Store/actions";

export const HotKeyHandler = () => {
  //   const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const globalState = useStore();

  const ui = globalState.getState()["ui"];
 
  const changeTerminalState = () => {
    if (ui.terminal_state == "hide") {
      dispatch(setTerminalState("show"));
    } else {
      dispatch(setTerminalState("hide"));
    }
  };
  useHotkeys("ctrl+q", () => changeTerminalState());

  return null;
};
