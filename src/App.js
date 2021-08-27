import './App.css';
import {Route} from 'react-router-dom';
import Header  from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import Tags from './components/Tags/Tags';
import Profile from './components/Profile/Profile';
import Questions from './components/Questions/Questions';
import Answer from './components/Answer/Answer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/main' render={() => <Main owners={props.store.owners}/>}/>
        <Route path='/users' render={() => <Users owners={props.store.owners}/>}/>
        <Route path='/tags' render={() => <Tags />}/>
        <Route path='/profile' render={() => <Profile />}/>
        <Route path='/questions' render={() => <Questions />}/>
        <Route path='/answer' render={() => <Answer />}/>
      </div>
    </div>
  );
}

export default App;
