import {ChangeEvent, Component, DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type InputPropsType = DefaultInputPropsType & {
    labelName: string
    value: string;
    name: string;
    type: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>)=>void;
}

type InputStateType = {

}
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
                       onChange={this.props.handleChange}
                />
            </label>
        );
    }
}
