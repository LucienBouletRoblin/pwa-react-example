import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import { offline } from "@redux-offline/redux-offline";
import thunk from "redux-thunk";

import reducers from "../reducers";

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk), offline(offlineConfig))
);
