import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable"
import rootEpic from "./rootEpic";
import rootReducer from "./rootReducer";


const store = () => {
  const epicMiddleware = createEpicMiddleware()

  const middlewares = [epicMiddleware]

  const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  
  const store = createStore(
    rootReducer,
    {},
    enhancer
    
  )

  epicMiddleware.run(rootEpic)

  return store
}


export default store