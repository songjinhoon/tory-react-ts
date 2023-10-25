import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './context/modal';
import { ModeProvider } from './context/mode';
import { CookiesProvider } from 'react-cookie';
import AxiosInterceptor from '@util/axiosInterceptor';
import { refreshCheck } from '@util/authConfig';

const SignIn = loadable(() => import('@page/auth/SignInPage'));
const SignUp = loadable(() => import('@page/auth/SignUpPage'));
const Dashboard = loadable(() => import('@page/dashboard/Dashboard'));
const Post = loadable(() => import('@page/post/Post'));
const PostCreate = loadable(() => import('@page/post/PostCreate'));
const Admin = loadable(() => import('@page/admin/Admin'));
const UserUpdate = loadable(() => import('@page/admin/UserUpdatePage'));

function App() {
  useEffect(() => {
    console.log('DEMO PROJECT START');
    refreshCheck();
  }, []);

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
                <Route path={'/admin'} element={<Admin />}></Route>
                <Route path={'/user/update'} element={<UserUpdate />}></Route>
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
  const [render, setRender] = useState(false);

  if (!render) {
    AxiosInterceptor(navigate);
    setRender(true);
  }

  return <></>;
};
