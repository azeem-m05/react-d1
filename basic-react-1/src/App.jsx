import "./App.css";
import Description from "./Description.jsx";
import Math from "./Math.jsx";
import ProductTab from "./ProductTab.jsx";
import { Sum, Title } from "./Title.jsx";

function App() {
  return (
    <>
      <Title />
      <Description />
      <Sum />
      <Math />
      <h1>This is my app component</h1>
      <p>This is a paragraph</p>
      <ProductTab />
    </>
  );
}

export default App;

// named exports ex:
// export {Title};
