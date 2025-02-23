import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App.jsx'
import allReducers from "./reducers/index.jsx"
const store=createStore(allReducers)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
     <App />
  </BrowserRouter>
  </Provider>
  
   
  
)
