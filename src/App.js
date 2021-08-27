import './App.css';
import {Route} from 'react-router-dom';
import Header  from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import Tags from './components/Tags/Tags';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/main' render={() => <Main />}/>
        <Route path='/users' render={() => <Users />}/>
        <Route path='/tags' render={() => <Tags />}/>
      </div>
    </div>
  );
}

export default App;
