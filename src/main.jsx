import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import App from './App.jsx'
import store from './store.jsx';
import './index.css'





let persistore = persistStore(store);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistore  } >
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
