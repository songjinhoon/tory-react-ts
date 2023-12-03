import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './context/modal';
import { ModeProvider } from './context/mode';
import { CookiesProvider } from 'react-cookie';
import AxiosInterceptor from '@utils/axiosInterceptor';
import { refreshCheck } from './utils/authConfig';

const SignIn = loadable(() => import('@components/page/auth/SignInPage'));
const SignUp = loadable(() => import('./components/page/auth/SignUpPage'));
const Dashboard = loadable(() => import('@components/page/dashboard/dashboard'));
const Pokemon = loadable(() => import('@components/page/pokemon/pokemonField'));
const PokemonDex = loadable(() => import('@components/page/pokemon/pokemonDex'));

const Post = loadable(() => import('./components/page/post/Post'));
const PostCreate = loadable(() => import('./components/page/post/PostCreate'));
const Admin = loadable(() => import('./components/page/admin/Admin'));
const UserUpdate = loadable(
  () => import('./components/page/admin/UserUpdatePage'),
);

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
                <Route path={'/pokemon'} element={<Pokemon />}></Route>
                <Route path={'/pokemon-dex'} element={<PokemonDex />}></Route>
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
