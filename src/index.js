import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App'
import reducers from './componentsWithRedux/reducers';
import "bootstrap-icons/font/bootstrap-icons.css";


/*ReactDOM.render(
    <App />,
    document.querySelector("#root")
)*/

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector("#root")
)