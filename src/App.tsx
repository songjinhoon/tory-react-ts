import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from '@context/modal';
import { ModeProvider } from '@context/mode';
import { CookiesProvider } from 'react-cookie';
import AxiosInterceptor from '@utils/axiosInterceptor';
import { refreshCheck } from '@utils/authConfig';
import CommonLoading from '@components/molecule/loading/commonLoading';
import { ThemeProvider } from '@context/theme';
import ModalContainer from '@components/organism/popup/modal/ModalContainer';

const SignIn = lazy(() =>
  Promise.all([
    import(/*webpackChunkName: "SignIn" */ '@components/page/auth/SignInPage'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const SignUp = lazy(() =>
  Promise.all([
    import(/*webpackChunkName: "SignUp" */ '@components/page/auth/SignUpPage'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const Dashboard = lazy(() =>
  Promise.all([
    import('@components/page/dashboard/dashboardPage'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const PokemonField = lazy(() =>
  Promise.all([
    import('@components/page/pokemon/pokemonField'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const PokemonDex = lazy(() =>
  Promise.all([
    import('@components/page/pokemon/pokemonDex'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const Post = lazy(() => import('@components/page/post/Post'));
const PostCreate = lazy(() => import('@components/page/post/PostCreate'));
const Admin = lazy(() => import('@components/page/admin/Admin'));
const UserUpdate = lazy(() => import('@components/page/admin/UserUpdatePage'));

function App() {
  useEffect(() => {
    console.log('DEMO PROJECT START');
    refreshCheck();
  }, []);

  return (
    <CookiesProvider>
      <ModalProvider>
        <ModeProvider>
          <ThemeProvider>
            <div className="App">
              <BrowserRouter>
                <NavigateFunctionComponent></NavigateFunctionComponent>
                <Suspense fallback={<CommonLoading />}>
                  <Routes>
                    <Route path={'/'} element={<SignIn />}></Route>
                    <Route path={'/sign-in'} element={<SignIn />}></Route>
                    <Route path={'/sign-up'} element={<SignUp />}></Route>
                    <Route path={'/dashboard'} element={<Dashboard />}></Route>
                    <Route
                      path={'/pokemon-field'}
                      element={<PokemonField />}
                    ></Route>
                    <Route
                      path={'/pokemon-dex'}
                      element={<PokemonDex />}
                    ></Route>
                    <Route path={'/post'} element={<Post />}></Route>
                    <Route
                      path={'/post-create'}
                      element={<PostCreate />}
                    ></Route>
                    <Route path={'/admin'} element={<Admin />}></Route>
                    <Route
                      path={'/user/update'}
                      element={<UserUpdate />}
                    ></Route>
                  </Routes>
                  <ModalContainer></ModalContainer>
                </Suspense>
              </BrowserRouter>
              <ToastContainer></ToastContainer>
            </div>
          </ThemeProvider>
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
