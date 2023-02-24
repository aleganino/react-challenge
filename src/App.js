import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calculator from './components/Calculator';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1>React Calculator</h1>
      <Calculator/>
    </Container>
  );
}

export default App;
