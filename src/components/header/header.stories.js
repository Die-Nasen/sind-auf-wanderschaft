import "./header.css";
import header from "./header.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/header", decorators: [centered] };

export const Header = () => header;
