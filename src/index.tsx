import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { store } from './lib/store'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import GlobalModal from './components/Modal/Modal'
import Notifications from './components/Notifications/Notifications'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const persistor = persistStore(store)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Notifications />
        <GlobalModal />
        <AppRouter />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
