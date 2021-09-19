import Routes from './Routes/Routes';
import 'antd/dist/antd.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;