import ReactTerminal from "react-terminal-component";
import React, { useState } from "react";

import { useHotkeys } from "react-hotkeys-hook";
import { useDispatch, useStore } from "react-redux";
import { setTerminalState } from "../Store/actions";

export default () => {

  return null
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

  // if (ui.terminal_state == "hide") {
  //   return null;
  // }
  return (
    <div
      className="w-full "
      style={{ borderTopWidth: 1, borderTopColor: "white" }}
    >
      <ReactTerminal
        theme={{
          background: "#1A192B",
          promptSymbolColor: "#f3f4f6",
          commandColor: "#f9fafb",
          outputColor: "#e5e7eb",
          errorOutputColor: "#f87171",
          fontSize: "1.1rem",
          spacing: "1%",
          fontFamily: "monospace",
          width: "100%",
          // hei: "20vh",
          height: "10vh",
          // height: "10vh",
        }}
        clickToFocus
      />{" "}
    </div>
  );
};
