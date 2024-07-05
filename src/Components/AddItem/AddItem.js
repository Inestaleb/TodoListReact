import React , {Component} from "react";
import './AddItem.css'
class AddItem extends Component{
    state={
        task : '' ,
    }
    handleChange =(e)=>{
         this.setState({
            [e.target.id]: e.target.value
         })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
      if(e.target.task.value===''){
        return false
      }else{
        this.props.AddItem(this.state)
        this.setState({
            task:''
        })
      }
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter name task" id="task" onChange={this.handleChange} value={this.state.task} />
                <input type="submit"  value="Add"/>
               </form>
            </div>
        )
    }
}
export default AddItem 