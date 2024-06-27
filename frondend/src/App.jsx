import { Form } from "./components/Form";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Error } from "./components/Error";

function App() {
  return (
    <>
      <Header className="mb-8" />
      <div className="container mx-auto">
        <div className="grid grid-cols-[1fr_2fr] gap-6 items-start">
          <Form />
          <div className="grid gap-6 items-start">
            <Filter />
            <List />
          </div>
        </div>
      </div>
      <Error />
    </>
  );
}

export default App;
