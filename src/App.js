import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {renderRoutes()}
        </div>
      </Router>
    </div>
  );
}

export default App;
