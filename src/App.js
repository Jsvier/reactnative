
/*redux configuration*/
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import reducers from './Reducers'
import React, {Component} from 'react';
import thunk from 'redux-thunk';
 
//import store from './Lib/store'
import AppNavigation from './Containers/AuthScreen'

const loggerMiddleware = createLogger({ predicate: () => false })
const persistedReducer = persistReducer({ key: 'root', storage, blacklist: ['filter', 'modals'] }, reducers)
 
function configureStore (initialState) {
  const enhancer = compose(
    applyMiddleware(thunk, loggerMiddleware)
  )
  return createStore(persistedReducer, initialState, enhancer)
}
 
const initialState = {}
export const store = configureStore(initialState)
export const persistor = persistStore(store)



export default class App extends Component {
  render() {
    return ( 
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <AppNavigation />
          </PersistGate>
      </Provider>
    );
  }
}

