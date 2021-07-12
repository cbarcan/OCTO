import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {defaultTheme, GlobalStyle} from './styles';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import EmailSignUp from './pages/Login/SingUp/EmailForm';
import CongratsMessage from './pages/Login/SingUp/CongratsDiv';
import VerificationForm from './pages/Login/SingUp/Verification'
import Tournament from './pages/Tournament';
import CreateTournament from './pages/CreateTournament';
import Message from './pages/CreateTournament/message';
import PrivateOrPublic from './pages/CreateTournament/PrivateOr';
import BracketPage from './pages/BracketPage';
import {PageContainer, PageContent} from './styles/page-layout';
import Profile from "./pages/Profile/index";


ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
      <PageContainer>
            <PageContent>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/tournament/:id" component={Tournament} />
              <Route exact path="/tournament/:id/bracket" component={BracketPage} />
              <Route exact path="/Login" component={ Login } />
              <Route exact path="/registration" component={ EmailSignUp } />
              <Route exact path="/confirmation" component={ CongratsMessage } />
              <Route exact path="/verification" component={ VerificationForm} />
              <Route exact path="/create" component={ CreateTournament } />
              <Route exact path="/message" component={ Message } />
              <Route exact path="/privacy" component={ PrivateOrPublic } />
              <Route exact path="/user/profile" component={Profile} />
            </Switch>
            </PageContent>
        </PageContainer>
    </Router>
    </ThemeProvider>
  </Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

