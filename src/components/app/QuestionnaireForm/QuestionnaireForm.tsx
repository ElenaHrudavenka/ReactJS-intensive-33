import React, {LegacyRef} from 'react';
import {ChangeEvent, Component} from 'react';
import {Input} from '../../generic/Input';
import s from './QuestionnaireForm.module.css'
import {QuestionnaireFormPropsType, QuestionnaireFormStateType} from "./QuestionnaireForm.type";

export class QuestionnaireForm extends Component<QuestionnaireFormPropsType, QuestionnaireFormStateType> {
  private myRef: React.RefObject<HTMLInputElement>;

  constructor(props: QuestionnaireFormPropsType) {
    super(props);
    this.myRef = React.createRef();
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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(`ComponentDidMount has been call.`)
    console.log(this.myRef)
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

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const {name, value} = event.target;
    let isDisabled = name === 'skills' && value.toLowerCase().includes('react');
    this.setState({...this.state, [name]: value, isDisabled});
  }

  handleClick(): void {
    this.myRef.current?.focus();
  }

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <Input labelName={'Имя:'}
               myRef={this.myRef}
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
               value={!this.state.age ? '' : String(this.state.age)}
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
        <input type='button' value='Переместить фокус' onClick={this.handleClick}/>
      </form>
    )
  }
}
