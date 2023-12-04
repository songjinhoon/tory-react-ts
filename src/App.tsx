import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './context/modal';
import { ModeProvider } from './context/mode';
import { CookiesProvider } from 'react-cookie';
import AxiosInterceptor from '@utils/axiosInterceptor';
import { refreshCheck } from './utils/authConfig';
import CommonLoading from '@components/molecule/loading/commonLoading';

const SignIn = lazy(
  () =>
    import(
      /*webpackChunkName: "SignIn.7608294d" */ '@components/page/auth/SignInPage'
    ),
);
const SignUp = lazy(
  () =>
    import(
      /*webpackChunkName: "SignUp.7608294d" */ '@components/page/auth/SignUpPage'
    ),
);
const Dashboard = lazy(
  () =>
    import(
      /*webpackChunkName: "Dashboard.7608294d" */ '@components/page/dashboard/dashboard'
    ),
);

/*const Pokemon = lazy(() => import('@components/page/pokemon/pokemonField'));
const PokemonDex = lazy(() => import('@components/page/pokemon/pokemonDex'));
const Post = lazy(
  () =>
    import(
      /!* webpackChunkName: "Post.[chunkhash].js" *!/ '@components/page/post/Post'
    ),
);
const PostCreate = lazy(
  () =>
    import(
      /!* webpackChunkName: "PostCreate.[chunkhash].js" *!/ '@components/page/post/PostCreate'
    ),
);
const Admin = lazy(() => import('@components/page/admin/Admin'));
const UserUpdate = lazy(() => import('@components/page/admin/UserUpdatePage'));*/

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
              <Suspense fallback={<CommonLoading />}>
                <Routes>
                  <Route path={'/'} element={<SignIn />}></Route>
                  <Route path={'/sign-in'} element={<SignIn />}></Route>
                  <Route path={'/sign-up'} element={<SignUp />}></Route>
                  <Route path={'/dashboard'} element={<Dashboard />}></Route>
                  {/*<Route path={'/pokemon'} element={<Pokemon />}></Route>
                  <Route path={'/pokemon-dex'} element={<PokemonDex />}></Route>
                  <Route path={'/post'} element={<Post />}></Route>
                  <Route path={'/post-create'} element={<PostCreate />}></Route>
                  <Route path={'/admin'} element={<Admin />}></Route>
                  <Route path={'/user/update'} element={<UserUpdate />}></Route>*/}
                </Routes>
              </Suspense>
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
