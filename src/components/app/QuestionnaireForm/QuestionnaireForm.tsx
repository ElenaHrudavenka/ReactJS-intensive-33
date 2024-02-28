import {ChangeEvent, Component} from 'react';
import { Input } from '../../generic/Input';
import s from './QuestionnaireForm.module.css'

export type QuestionnaireFormStateType = {
    firstName: string;
    lastName: string;
    age: number | null;
    email: string;
    skills: string;
    isDisabled: boolean;
}
type QuestionnaireFormPropsType = {

}
export class QuestionnaireForm extends Component<QuestionnaireFormPropsType, QuestionnaireFormStateType> {
    constructor(props: QuestionnaireFormPropsType) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: null,
            email: '',
            skills: '',
            isDisabled: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log(`ComponentDidMount has been call.`)
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate has been call.`)
    }

    componentWillUnmount() {
        console.log(`componentWillUnmount has been call.`)
    }

    handleSubmit(event: any) {
        console.log(`Пользователь ${this.state.firstName} ${this.state.lastName} (${this.state.email}) \nВозраст: ${this.state.age}\nНавыки: ${this.state.skills}`)
        event.preventDefault();
    }
    handleChange(event: ChangeEvent<HTMLInputElement>):void {
        const {name, value} = event.target;
        this.setState({...this.state, [name]: value});
    }

    render() {
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <Input labelName={'Имя:'}
                       type={'text'}
                       name={'firstName'}
                       value={this.state.firstName}
                       handleChange={this.handleChange}
                />
                <Input labelName={'Фамилия:'}
                       type={'text'}
                       name={'lastName'}
                       value={this.state.lastName}
                       handleChange={this.handleChange}
                />
                <Input labelName={'Возраст:'}
                       type={'text'}
                       name={'age'}
                       value={!this.state.age? '' : String(this.state.age)}
                       handleChange={this.handleChange}
                />
                <Input labelName={'Адрес электронной почты:'}
                       type={'text'}
                       name={'email'}
                       value={this.state.email}
                       handleChange={this.handleChange}
                />
                <Input labelName={'Навыки:'}
                       type={'text'}
                       name={'skills'}
                       value={this.state.skills}
                       handleChange={this.handleChange}
                />
                <input type='submit' value='Отправить данные' disabled={this.state.isDisabled}/>
            </form>
        )
    }
}
