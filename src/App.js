import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import FormDisplay from './contactForm.js/formParent';


function App() {
  return (
    <div className="App">
    <Provider store={store} >
      <FormDisplay />
    </Provider>
    </div>

  );
}

export default App;
