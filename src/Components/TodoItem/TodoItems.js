import React  from "react";
import './TodoItems.css'
const TodoItems =(props) => {
    const {items,deleteItem}=props;
   let length = items.length;

    const ListItems=length ?(
    items.map(item => {
        return(
            <div key={item.id}>
                <span className="task">{item.task}</span>
                <span className="action icon" onClick={() =>deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
    ) : (
        <p>there is no task to show</p>
    )
    return(
    <div className="ListItems">
<div>
    <span className="task title">Name</span>
    <span  className="action title">Action</span>
</div>
        {ListItems}
    </div>
    )
}
export default TodoItems 