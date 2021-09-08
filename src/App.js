import './App.css';
import {Route} from 'react-router-dom';
import Header  from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';
import Navbar from './components/Navbar/Navbar';
import Tags from './components/Tags/Tags';
import ProfileContainer from './components/Profile/ProfileContainer';
import Questions from './components/Questions/Questions';
import Answer from './components/Answer/Answer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/main' render={() => <MainContainer />}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
        <Route path='/users' render={() => <UsersContainer />}/>
        <Route path='/tags' render={() => <Tags />}/>
        <Route path='/questions' render={() => <Questions />}/>
        <Route path='/answer' render={() => <Answer />}/>
      </div>
    </div>
  );
}

export default App;
