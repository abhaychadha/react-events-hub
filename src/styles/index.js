import { injectGlobal } from "styled-components";
import common from "./common";
import fonts from "./fonts.css";
injectGlobal`  
  ${fonts}
  ${common}
`;
