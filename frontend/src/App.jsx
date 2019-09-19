import React from 'react';
import UserList from './components/UserList';
import Form from './components/form';
import UserContextProvider from './contexts/UserContext';
import EditForm from './components/editForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <UserContextProvider>
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route path="/new" component={Form} />
            <Route path="/edit" component={EditForm} />
          </Switch>
        </Router>
      </React.Fragment>
    </UserContextProvider>
  );
}

export default App;
