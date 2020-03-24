import React, {useState} from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

function App() {
  const[opt, setOpt] = useState({
    options: [],
    selectedOption: undefined
  });

  const handleAddOption = (option) =>{
    if(!option){
      return "Enter valid value to add item";
    }else if(opt.options.indexOf(option) > -1){
      return "This option already exitsts";
    }
    setOpt((opt) =>({options:opt.options.concat(option)}));
  }
  const handleRemoveAll =() =>{
    setOpt({options:[]});
  }
  const handleRemove =(optDel) =>{
    setOpt({options:opt.options.filter(option =>
      (option !== optDel))})
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
      <Action />
      <div className="widget">
        <Options
        options={opt.options}
        onRemoveAll={handleRemoveAll}
        onRemove = {handleRemove}
        />
        <AddOption addOption={handleAddOption} />
      </div>
      </div>
      
      
    </div>
  );
}


export default App;
