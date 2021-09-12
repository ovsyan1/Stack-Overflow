import './App.css';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header  from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';
import Navbar from './components/Navbar/Navbar';
import TagsContainer from './components/Tags/TagsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import QuestionContainer from './components/Question/QuestionContainer';
import Answer from './components/Answer/Answer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
        <Route path='/main' render={() => <MainContainer />}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
        <Route path='/users' render={() => <UsersContainer />}/>
        <Route path='/tags' render={() => <TagsContainer />}/>
        <Route path='/question/:questionId?' render={() => <QuestionContainer />}/>
        <Route path='/answer' render={() => <Answer />}/>
      </div>
    </div>
  );
}

export default App;
