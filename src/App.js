import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap'
import { persons } from './data'
import DatesNumber from './components/DatesNumber'
import DatesList from './components/DatesList'
import ActionButtons from './components/ActionButtons'
import { useState } from 'react';

function App() {
  const [PersonsData, setPersonsData] = useState(persons);
  const DeleteData = () => {
    setPersonsData([])
  }
  const ShowData = () => {
    setPersonsData(persons)
  }
  return (
    <div className="App">
      <Container className='py-5'>
       <DatesNumber persons={PersonsData}/>
       <DatesList persons={PersonsData}/>
       <ActionButtons DeleteData={DeleteData} ShowData={ShowData}/>
      </Container>
    </div>
  );
}

export default App;
