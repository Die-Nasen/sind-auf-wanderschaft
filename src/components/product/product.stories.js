import "./product.css";
import productPic from "./product-picture.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Product", decorators: [centered] };

export const picture = () => productPic;
