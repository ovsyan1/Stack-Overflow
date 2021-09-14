import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header  from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';
import Navbar from './components/Navbar/Navbar';
import TagsContainer from './components/Tags/TagsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import QuestionContainer from './components/Question/QuestionContainer';
import Answer from './components/Answer/Answer';
import UsersContainer from './components/Users/UsersContainer';
import Preloader from './components/common/Preloader';
import TagInfo from './components/Tags/TagInfo/TagInfo';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Switch>
        <Route exact path='/' render={() => <Redirect to={'/main'} />} />
        <Route exact path='/main' render={() => <MainContainer />}/>
        <Route exact path='/profile/:userId?' render={() => <ProfileContainer />}/>
        <Route exact path='/users' render={() => <UsersContainer />}/>
        <Route exact path='/tags' render={() => <TagsContainer />}/>
        <Route path='/tags/:tagName?' render={() => <TagInfo />}/>
        <Route path='/question/:questionId?' render={() => <QuestionContainer />}/>
        <Route exact path='/answer' render={() => <Answer />}/>
        <Route path='*' render={() => <div><Preloader /><div>404 NOT FOUND</div></div>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
