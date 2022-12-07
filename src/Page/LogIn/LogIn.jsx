import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { Box, Input, Links, icons } from 'commonStyle/Common.styled';
import { fetchLogInUser } from 'redux/auth/authOperations';
import { FormContact, Eror, ConteierLogin } from './LogIn.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValue = { email: '', password: '' };

const LogInUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { IconsExpand } = icons;

  const hendleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(fetchLogInUser({ email, password }));
    navigate('/contacts');
    resetForm();
  };

  return (
    
    <ConteierLogin
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Formik
        initialValues={initialValue}
        onSubmit={hendleSubmit}
        validationSchema={validationSchema}
      >
        <FormContact>
          <Box
            marginTop="10px"
            width="270px"
          >
            <Links to={location.state?.from ?? '/'}>
              <IconsExpand />
            </Links>
          </Box>
          <Box
            marginTop="70px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gridGap="25px"
          >
            <Input type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" render={msg => <Eror>{msg}</Eror>} />

            <Input type="text" name="password" placeholder="Password" />
            <ErrorMessage name="password" render={msg => <Eror>{msg}</Eror>} />

            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Box>
        </FormContact>
      </Formik>
    </ConteierLogin>
  );
};

export default LogInUser;
