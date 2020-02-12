import React, { Component } from "react";
import Display from "../Display";

class Todo extends Component {

    state = {
        todoItem: "",
        list: ["Feed the baby"]
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        let allList = localStorage.getItem("todo");
        if(allList)
        this.setState({
            list: JSON.parse(allList)
        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        let todoArr = [];
        todoArr.push(...this.state.list);
        todoArr.push(this.state.todoItem);
        localStorage.setItem("todo", JSON.stringify(todoArr));
        this.setState({
            todoItem: ""
        })
        this.loadData();
    }

    handleDelete = event => {
        event.preventDefault();
        console.log(event.target.id);
        let todosInProgress = this.state.list.filter(item => {
            return item!=event.target.id
        })
        localStorage.setItem("todo", JSON.stringify(todosInProgress));

        this.setState({
            list: todosInProgress
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card" style={{ width: "250px", height: "350px" }}>
                        <input type="text" name="todoItem" value={this.state.todoItem} onChange={this.handleInputChange}></input>
                        <button type="submit" onClick={this.handleSubmit}>Add</button>
                    </div>
                    {this.state.list.map(item => (
                        <Display
                            key={item}
                            id={item}
                            item={item}
                            handleDelete={this.handleDelete}
                        />
                    ))}

                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}

export default Todo;