# ToDoList

## Summary
Application that helps user to make a note of their `toDoList`. This is a single page *React* application that gives users a good visualize effect that each list is coloured differently

## Installation Guide
* User has to download all files from GitHub repository
* User can either clone the repository or can download all files manually unzipping might take a while though
* Package.json file has required depencies to be installed. So, user can type `npm install` to install all needed packages
* User can type `npm start` kick start the application

## Technologies Used
- React : Javascript Library used for *User Interfaces*
- Bootstrap : For application styling
- Moment.js : Javascript library. As far as this application is concerned, used to grab the *current-date*

## Application Functioning
Type `npm start` from command line. Funtioning of the application is shown below

![Site](React-App-gif.gif)

* On run of the application, allows users to create a list of their toDos. User can type in their list in the text area and click on the `add-button` to add those to the *local-storage*. 

* User can mark a list as *completed* so that, it's deleted from the *local-storage* and is no longer in your list.


## Code Snippet
*Display Component*

```Javascript
const backgroundColor = ["69A0FF", "#d64161", "#D469FF", "#FFEE75", "#FFEFB5", "#463B80"];
    var randomColor = Math.floor(Math.random() * backgroundColor.length);
    const color = backgroundColor[randomColor];

    return (
        <div className="shadow-lg p-3 mb-5 rounded" style={{backgroundColor: color}}>
                <h1>{props.item} <FA name="check" className="check" onClick={props.handleDelete} id={props.id} /></h1>
        </div>
    )
```
> The above code is the logic behind the random color change for each list.

*Display Date Component*

```Javascript
    state = {
        currentDate: moment(new Date()).format("YYYY-MM-DD"),
        day: moment(new Date()).format("dddd")
       };

    render() { 
        const Style={
            header: {
                backgroundColor: "black"
            }
        }
    return(
        <div>
            <h1 className="header text-light" style={Style.header}>{this.state.currentDate} {this.state.day}</h1>
        </div>
    )
    }
```
> The above code snippet is responsible for the display of current date on top using *moment.js*

*ToDO Component*

```Javascript
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
```

> Whenever user clicks on submit button, the user's list is captured and the state is updated with the latest list and them the same is stored to the *local-storage* as well.

## Author Links
[LinkedIn](https://www.linkedin.com/in/mahisha-gunasekaran-0a780a88/)

[GitHub](https://github.com/Mahi-Mani)
