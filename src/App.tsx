import React from 'react';
import s from './App.module.css';
import {QuestionnaireForm} from "./components/app/QuestionnaireForm/QuestionnaireForm";

function App() {
  return (
    <div className={s.appWrapper}>
      <QuestionnaireForm/>
    </div>
  );
}

export default App;
