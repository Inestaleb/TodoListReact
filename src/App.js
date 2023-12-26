import React ,{ Component } from "react";
import TodoItems from "./Components/TodoItem/TodoItems";
import AddItem from "./Components/AddItem/AddItem";
class App extends Component{
  state={
    items :[
      {id:1,task:'task1'},
      {id:2,task:'task2'},
      {id:3,task:'task3'},
    ]
  }
  deleteItem = (id)=>{
   let items=this.state.items;
   let i=items.findIndex(itemm=>itemm.id===id)
   items.splice(i,1);
   this.setState({items})
  }
  AddItem =(item) =>{
    item.id=Math.random();
  let items=this.state.items;
  items.push(item);
  this.setState(items);

  }
  render(){
    return (
      <div className="App container">
      <h1 className="text-center">TodoList App</h1>
      <TodoItems  items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem AddItem={this.AddItem} />
      </div>
    );
  }
}

export default App;
