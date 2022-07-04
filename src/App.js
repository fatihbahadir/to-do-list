import { useSelector } from "react-redux";
import Header from "./components/Header";
import Input from "./components/Input";
import ListContent from "./components/ListContent";



function App() {
  const {todoList,todoFilter}=useSelector((state)=>state.todo)
  console.log(todoList,todoFilter)
  return (
    <div className="md:container md:mx-auto">
      <Header>
      <Input/>
      <ListContent>
   
        </ListContent>

      </Header>

    </div>
  );
}

export default App;
