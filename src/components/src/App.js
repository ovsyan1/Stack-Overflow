import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import HeaderContainer  from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import Navbar from './components/Navbar/Navbar';
import TagsContainer from './components/Tags/TagsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import QuestionContainer from './components/Question/QuestionContainer';
import Answer from './components/Answer/Answer';
import UsersContainer from './components/Users/UsersContainer';
import PageNotFound from './components/common/PageNotFound';
import TagInfo from './components/Tags/TagInfo/TagInfo';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import SearchContainer from './components/Search/SearchContainer';

const App = () => {
  return (
    <div className='wrapper'>
      <div className="app-wrapper">
        <HeaderContainer />
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
          <Route path='/login' render={() => <Login />} />
          <Route path='/search' render={() => <SearchContainer />} />
          <Route path='*' render={() => <div><PageNotFound /><div>404 NOT FOUND</div></div>}/>
          </Switch>
        </div>
      </div>
      <div className='footer-wrapper'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
