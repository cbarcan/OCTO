import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { defaultTheme, GlobalStyle } from './styles';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import Home from './pages/Home';
import Tournament from './pages/Tournament';
import { PageContainer, PageContent } from './styles/page-layout';


ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
      <PageContainer>
            <PageContent>
            <Switch>
              <Route exact={ true } path="/" component={ Home } />
              <Route exact path="/tournament/:id" component={Tournament} />
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

