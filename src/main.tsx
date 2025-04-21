import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import './index.css';
import App from './App.tsx';
// 在我们的根组件 与UI 通过 store 连接(react-redux),将数据从根组件向下传递
// 所有子组件都可以访问到store中的数据了
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
