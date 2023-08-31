import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './context/modal';
import { ModeProvider } from './context/mode';

const SignIn = loadable(() => import('@page/auth/SignIn'));
const SignUp = loadable(() => import('@page/auth/SignUp'));
const Dashboard = loadable(() => import('@page/dashboard/Dashboard'));

function App() {
  return (
    <ModalProvider>
      <ModeProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<SignIn />}></Route>
              <Route path={'/sign-in'} element={<SignIn />}></Route>
              <Route path={'/sign-up'} element={<SignUp />}></Route>
              <Route path={'/dashboard'} element={<Dashboard />}></Route>
            </Routes>
          </BrowserRouter>
          <ToastContainer></ToastContainer>
        </div>
      </ModeProvider>
    </ModalProvider>
  );
}

export default App;
