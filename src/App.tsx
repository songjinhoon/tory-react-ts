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
import ModalContainer from '@components/organism/skeleton/modal/modalContainer';
import { SWRConfig } from 'swr';

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
const Blog = lazy(() =>
  Promise.all([
    import('@components/page/blog/blogPage'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const PokemonField = lazy(() =>
  Promise.all([
    import('@components/page/pokemon/pokemonFieldPage'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const PokemonDex = lazy(() =>
  Promise.all([
    import('@components/page/pokemon/pokemonDexPage'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const PokemonBox = lazy(() =>
  Promise.all([
    import('@components/page/pokemon/pokemonBoxPage'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);
const PokemonStat = lazy(() =>
  Promise.all([
    import('@components/page/pokemon/pokemonStatPage'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);

function App() {
  useEffect(() => {
    console.log('DEMO PROJECT START');
    refreshCheck();
  }, []);

  return (
    <SWRConfig
      value={{
        suspense: true,
        // dedupingInterval: 60000,
      }}
    >
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
                      <Route
                        path={'/dashboard'}
                        element={<Dashboard />}
                      ></Route>
                      <Route path={'/blog'} element={<Blog />}></Route>
                      <Route
                        path={'/pokemon-field'}
                        element={<PokemonField />}
                      ></Route>
                      <Route
                        path={'/pokemon-dex'}
                        element={<PokemonDex />}
                      ></Route>
                      <Route
                        path={'/pokemon-box'}
                        element={<PokemonBox />}
                      ></Route>
                      <Route
                        path={'/pokemon-stat'}
                        element={<PokemonStat />}
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
    </SWRConfig>
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
