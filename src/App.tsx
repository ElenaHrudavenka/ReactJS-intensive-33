import React from 'react';
import s from './App.module.css';
import {QuestionnaireForm} from "./components/app/QuestionnaireForm/QuestionnaireForm";
import {ShowDataArray} from "./components/app/ShowDataArray/ShowDataArray";

function App() {
  return (
    <div className={s.appWrapper}>
      <QuestionnaireForm/>
      <ShowDataArray/>
    </div>
  );
}

export default App;
