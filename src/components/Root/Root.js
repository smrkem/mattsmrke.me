import React from "react";
import { Menu } from "../Menu/Menu";

const Root = ({children}) => (
  <div>
    <Menu />
    {children}
  </div>
)

export default Root
