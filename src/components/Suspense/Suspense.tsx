import React from "react";

import { SuspenseProps } from "./Suspense.types";

export const Suspense: React.FunctionComponent<SuspenseProps> = (props) => {
  const { condition, fallback, component } = props || {};

  const suspense = (
    <React.Suspense fallback={fallback}>
      { component }
    </React.Suspense>
  );

  if (condition) return suspense;
  return fallback;
}
