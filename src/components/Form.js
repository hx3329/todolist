import React,{ Component } from 'react';


class Form extends Component {
    state = {
        inputValue: "HelloWorld"

    }

    handleChange = (evt) => {
        console.log(evt.target.value);
    }

   render() {
       return (
           <div className="Form">
                <form>
                    <input
                        onChange = {(evt) => this.handleChange(evt)}
                        value = {this.state.inputValue} placeholder="input words"
                    />
                </form>
           </div>
       )
   }
}

export default Form;