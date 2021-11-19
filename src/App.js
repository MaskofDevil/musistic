import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from "react-helmet";
import MusicList from './components/musicList';
import Header from './components/header';
import Loading from './components/loading';
import NotFound from './components/notfound';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="container mt-5 mb-3">
            <MusicList />
          </div>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
