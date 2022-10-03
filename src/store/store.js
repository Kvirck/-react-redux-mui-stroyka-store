import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { questionsReducer } from './../features/Questions/reducer';
import thunk from 'redux-thunk';
import { productsByDiscountReducer } from './../features/Products/reducer';

const reducers = combineReducers({
  questions: questionsReducer,
  productsByDiscount: productsByDiscountReducer,
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
