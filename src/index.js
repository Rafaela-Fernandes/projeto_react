import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; 
import './css/mobile.css'; 
import './css/normalize.css'; 
import './css/reset.css'; 
import ConteudoCentral from './componentes/componentesCentralPage/ConteudoCentral';
import ConteudoCentralDetalhes from './componentes/componentesCentralPage/ConteudoCentralDetalhes';
import {Router,Route,browserHistory} from 'react-router';
import App from './App';



ReactDOM.render( 
      (<Router history={browserHistory}>
          <Route path="" component={App}>
          <Route path="/" component={ConteudoCentral}/>
            <Route path="/filmes" component={ConteudoCentral}/>
            <Route path="/detalhes" component={ConteudoCentralDetalhes}/>
          </Route>
    </Router>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
