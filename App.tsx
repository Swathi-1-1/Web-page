import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["image holder", "label", "text box"];
  const handleSelectitem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Waste Management"
        onSelectItem={handleSelectitem}
      />
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Validate Button
      </Button>
    </div>
  );
}
export default App;
