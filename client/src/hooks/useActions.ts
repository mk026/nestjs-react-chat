import { useMemo } from "react";
import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit";

import { useAppDispatch } from "./redux";

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
  const dispatch = useAppDispatch();
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};
