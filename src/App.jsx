import StoreContext from "./components/StoreContext";
import MainApp from "./components/MainApp";

function App() {
  return (
    <StoreContext>
      <MainApp  />
    </StoreContext>
  );
}

export default App;
