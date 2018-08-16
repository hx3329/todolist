import React,{ Component } from 'react';


class Form extends Component {

   render() {
       return (
           <div className="Form">
                <form>
                    <input
                        onChange = {(evt) => this.props.handleChange(evt)}
                        value = {this.props.inputValue}
                    />
                </form>
           </div>
       )
   }
}

export default Form;