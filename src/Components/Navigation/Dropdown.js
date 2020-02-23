import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";

const DropdownList = () => (
  <Menu>
    <Menu.Item>
      <a target="_blank" href="#">
        Кисти
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#">
        Краски
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#">
        Холсты
      </a>
    </Menu.Item>
  </Menu>
);

export default DropdownList;
