import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import DetailQuotes from './pages/DetailQuotes';
import NewQuotes from './pages/NewQuotes';
import NotFound from './pages/NotFound';



function App() {
  return (
    <Layout>
    <Switch> 
      <Route path='/' exact>
      <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
    <AllQuotes/>
      </Route>
      <Route path='/quotes/:quoteId'>
    <DetailQuotes/>
      </Route>
      <Route path='/new-quotes' exact>
    <NewQuotes/>
      </Route>
      <Route path='*'>
    <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
