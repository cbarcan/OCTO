import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { defaultTheme, GlobalStyle } from './styles';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import Home from './pages/Home';
<<<<<<< HEAD
import Login from './pages/Login/index.jsx';
=======
import Tournament from './pages/Tournament';
import { PageContainer, PageContent } from './styles/page-layout';

>>>>>>> c6b2515edcf4568bfef053fe584ad680fc003e61

ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
<<<<<<< HEAD
        <Switch>
          <Route exact={ true } path="/" component={ Home } />
          <Route exact={ true } path="/Login" component={ Login } />
      </Switch> 
=======
      <PageContainer>
            <PageContent>
            <Switch>
              <Route exact={ true } path="/" component={ Home } />
              <Route exact path="/tournament/:id" component={Tournament} />
            </Switch> 
            </PageContent>
        </PageContainer>

>>>>>>> c6b2515edcf4568bfef053fe584ad680fc003e61
    </Router>
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

