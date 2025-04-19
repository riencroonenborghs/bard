import React from "react";
import { createRoot } from "react-dom/client";

import Bard from "./bard";

const root = createRoot(document.getElementById("bard-player"));
root.render(
  <Bard></Bard>
);
