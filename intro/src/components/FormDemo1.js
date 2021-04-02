import React, { Component } from 'react';

class FormDemo1 extends Component {
    constructor(props){  
       super(props);
        this.state={    
            username:'',
            City:''
        }
    }
    onChangeHandler=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value});
    }
    onSubmitHandler=(event)=>{
        let name=event.target.name;
        event.preventDefault();

        alert(name);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Username:{this.state.username}</h3>
                    <input type="text"name="username"  onChange={this.onChangeHandler}></input>
                    <input type="submit" value="Kaydet" name="birincibutton"></input>

                    <h3>City:{this.state.City}</h3>
                    <input type="text" name="City" onChange={this.onChangeHandler}></input>
                    <input type="submit" value="Kaydet" name="ikincibutton"></input>

                </form>
            </div>
        );
    }
}

export default FormDemo1;