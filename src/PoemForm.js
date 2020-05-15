import React from 'react';


export class PoemForm extends React.Component{

    state = {       // The original state is empty
        name: '',
        content: ''
    }

    setName = e => this.setState({ name: e.target.value }) //Whenever you want the function to run, you add paranthesis on the end. This will change state.name

    setContent = e => this.setState({ content: e.target.value })
    

    handleSubmit = (e) => {
       this.props.onSubmit(this.state) //because we want to accept a poem in createPoem we must provide a poem here. 
        this.setState({name: '', content: ''})
    
    }

    render(){
        return (
            <div className="ui form">
                <h1>Create Poem</h1>
                <div className="field">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.setName}/> //onChange is an event that is triggered when the value has been changed. The function setName is invoked with the new value.
                </div>
                <div className="field">
                    <label>Content:</label>
                    <textarea value={this.state.content} onChange={this.setContent}/>
                </div>
                <button className="ui green button" onClick={this.handleSubmit} >Create</button>
            </div>

        )
    }


}