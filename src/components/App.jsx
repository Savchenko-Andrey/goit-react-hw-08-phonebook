import { Box } from 'commonStyle/Common.styled';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { PublickRoute } from './PublickRoute';
import { PrivateRoute } from './PrivateRoute';
import { fetchRefreshUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import('../Page/Home/Home'));
const RegisterUser = lazy(() => import('../Page/Register/Register'));
const LogIn = lazy(() => import('../Page/LogIn/LogIn'));
const UserMenu = lazy(() => import('../Page/UserMenu/UserMenu'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRefreshUser());
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={[3]}>
      <Box display="flex">
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/register"
              element={
                <PublickRoute
                  redirect="/contacts"
                  component={<RegisterUser />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublickRoute redirect="/contacts" component={<LogIn />} />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirect="/login" component={<UserMenu />} />
              }
            />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
};
