import {Component} from "react";
import {InputPropsType, InputStateType} from "./Input.type";


export class Input extends Component<InputPropsType, InputStateType> {
  constructor(props: InputPropsType) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.labelName}
        <input type={this.props.type}
               name={this.props.name}
               value={this.props.value}
               ref={this.props.myRef}
               onChange={this.props.handleChange}
        />
      </label>
    );
  }
}
