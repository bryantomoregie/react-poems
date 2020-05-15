import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';

class App extends React.Component {
  
  state = {
    poems: poems
  }

  createPoem = (poem) => {
    this.setState({poems: [...poems, poem]}) //setState replaces whatever we pass into it. Using the spread operator we make 
  }                                         // a new array with the content of poems array and the poem.
                                           // we pass in poem, the poem, as our argument. 'this' is an object, from a class. 
  
  deletePoem = (clickedPoem) => {
    this.setState({
      poems: this.state.poems.filter(poem => poem !== clickedPoem)
    })
  }

  editPoem = () => {
    console.log("hello world")
  }

   // Accomplishes the same thing:
        // this.setState({ 
        //     dragons: this.state.dragons.map( dragon => {
        //         if(dragon === clickedDragon){
        //             return  { ...clickedDragon, atWar: clickedDragon.atWar == true ? false : true }
        //         } else {
        //             return dragon
        //         }
        //     })
        // })

  render(){
    return (
      <div className="ui container">
        <PoemForm onSubmit={this.createPoem}/>  
        <PoemList                           // we pass this function to the Poemform component. this.createPoem is the above function. It will be called by onSubmit=
        poemsArray={this.state.poems} //assigning poemList a prop which we named poemsArray
        deletePoem={this.deletePoem}
        editPoem={this.editPoem}
        />
      </div>
    );
  }

}

export default App;
