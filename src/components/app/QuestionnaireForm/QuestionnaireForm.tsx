import {ChangeEvent, Component} from 'react';
import s from './QuestionnaireForm.module.css'

type QuestionnaireFormStateType = {
    firstName: string;
    lastName: string;
    age: number | null;
    email: string;
    skills: string;
    isDisabled: boolean;
}
export class QuestionnaireForm extends Component<any, QuestionnaireFormStateType> {
    constructor(props: any) {
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
    handleChange(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        this.setState<any>({[target.name]: target.value})
    }

    render() {
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type='text'
                           name='firstName'
                           value={this.state.firstName}
                           onChange={this.handleChange}
                    />
                </label>
                <label>
                    Фамилия:
                    <input type='text'
                           name='lastName'
                           value={this.state.lastName}
                           onChange={this.handleChange}
                    />
                </label>
                <label>
                    Возраст:
                    <input type='text'
                           name='age'
                           value={Number(this.state.age)}
                           onChange={this.handleChange}
                    />
                </label>
                <label>
                    Адрес электронной почты:
                    <input type='text'
                           name='email'
                           value={this.state.email}
                           onChange={this.handleChange}
                    />
                </label>
                <label>
                    Навыки:
                    <input type='text'
                           name='skills'
                           value={this.state.skills}
                           onChange={this.handleChange}
                    />
                </label>
                <input type='submit' value='Отправить данные' disabled={this.state.isDisabled}/>
            </form>
        )
    }
}
