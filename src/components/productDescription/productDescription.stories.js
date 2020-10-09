import "./productDescription.css";
import productDes from "./productDescription.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Product Description", decorators: [centered] };

export const description = () => productDes;
