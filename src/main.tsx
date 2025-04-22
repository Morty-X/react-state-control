import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index.ts';
import './index.css';
import App from './App.tsx';
import { PersistGate } from 'redux-persist/integration/react';
// 在我们的根组件 与UI 通过 store 连接(react-redux),将数据从根组件向下传递
// 所有子组件都可以访问到store中的数据了
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
