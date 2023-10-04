import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './context/modal';
import { ModeProvider } from './context/mode';
import { CookiesProvider } from 'react-cookie';
import AxiosInterceptor from '@util/axiosInterceptor';

const SignIn = loadable(() => import('@page/auth/SignIn'));
const SignUp = loadable(() => import('@page/auth/SignUp'));
const Dashboard = loadable(() => import('@page/dashboard/Dashboard'));
const Post = loadable(() => import('@page/post/Post'));
const PostCreate = loadable(() => import('@page/post/PostCreate'));

function App() {
  return (
    <CookiesProvider>
      <ModalProvider>
        <ModeProvider>
          <div className="App">
            <BrowserRouter>
              <NavigateFunctionComponent></NavigateFunctionComponent>
              <Routes>
                <Route path={'/'} element={<SignIn />}></Route>
                <Route path={'/sign-in'} element={<SignIn />}></Route>
                <Route path={'/sign-up'} element={<SignUp />}></Route>
                <Route path={'/dashboard'} element={<Dashboard />}></Route>
                <Route path={'/post'} element={<Post />}></Route>
                <Route path={'/post-create'} element={<PostCreate />}></Route>
              </Routes>
            </BrowserRouter>
            <ToastContainer></ToastContainer>
          </div>
        </ModeProvider>
      </ModalProvider>
    </CookiesProvider>
  );
}

export default App;

const NavigateFunctionComponent = (props: any) => {
  const navigate = useNavigate();
  const [ran, setRan] = useState(false);

  if (!ran) {
    AxiosInterceptor(navigate);
    setRan(true);
  }
  return <></>;
};
