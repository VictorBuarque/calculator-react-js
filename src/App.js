import Input from './components/Input';
import Button from './components/Button';
import {Container,Content,Row} from './styles';
import { useState } from 'react';

function App() {
  //Use state para mudança de estado
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState("");
  
  //Funções com mudança de estado devem começar com handle antecedendo.
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? '': prev}${number}`);
  };
  
  const handleClearNumber = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('');
  };
  const handleSumNumber = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    } 
  };
  const handleMinorNumber = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const minor = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minor));
      setOperation('')
    } 
  };
  const handleMultiplyNumber = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else{
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation('')
    }
  }
  const handleDivideNumber = () => {
    if (firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('')
    }
  }
  const handleSquareRoot = () => {
    setOperation('sqr');
    const square = Number(currentNumber);
    const squareRoot = Math.sqrt(square);
    setCurrentNumber(squareRoot);
  }
  const handlePercentage = () => {
    if (firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('%')
    } else {
      const division = Number(firstNumber) * Number(currentNumber/100);
      setCurrentNumber(String(division));
      setOperation('')
    }
    
  }
  const handleSquarePower = () => {
    setOperation('**');
    const number = Number(currentNumber)**2;
    setCurrentNumber(number);
  }
  const handleEquals = () => {
    if(firstNumber !=='0' && operation !== '' && currentNumber !== 0){
      switch(operation){
        case '+':
          handleSumNumber()
          break;
          default:
      } 
      switch(operation){
        case '-':
          handleMinorNumber()
          break;
          default:
      }
      switch(operation){
        case '*':
          handleMultiplyNumber()
          break;
          default:
      }
      switch(operation){
        case '/':
          handleDivideNumber()
          break;
          default:
      }
      switch(operation){
        case 'sqr':
          handleSquareRoot()
          break;
          default:
      }
      switch(operation){
        case '%':
          handlePercentage()
          break;
          default:
      }
      switch(operation){
        case '**':
          handleSquarePower()
          break;
          default:
      }
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={handleClearNumber}/>
          <Button label="%" onClick={handlePercentage}/>
          <Button label="√2" onClick={handleSquareRoot}/>
          <Button label="2²" onClick={handleSquarePower}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>handleAddNumber('7')}/>
          <Button label="8" onClick={()=>handleAddNumber('8')}/>
          <Button label="9" onClick={()=>handleAddNumber('9')}/>
          <Button label="/" onClick={handleDivideNumber}/>
        </Row>
        <Row>
          <Button label="6" onClick={()=>handleAddNumber('6')}/>
          <Button label="5" onClick={()=>handleAddNumber('5')}/>
          <Button label="4" onClick={()=>handleAddNumber('4')}/>
          <Button label="x" onClick={handleMultiplyNumber}/>
        </Row>
        <Row>
          <Button label="3" onClick={()=>handleAddNumber('3')}/>
          <Button label="2" onClick={()=>handleAddNumber('2')}/>
          <Button label="1" onClick={()=>handleAddNumber('1')}/>
          <Button label="-" onClick={handleMinorNumber}/>
        </Row>
        <Row>
          <Button label="0" onClick={()=>handleAddNumber('0')}/>
          <Button label="." onClick={()=>handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="+" onClick={handleSumNumber} />   
        </Row>
      </Content>
    </Container>
  );
}

export default App;
