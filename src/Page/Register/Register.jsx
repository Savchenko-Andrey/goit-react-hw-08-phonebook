import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { Box, Input, Links, icons } from 'commonStyle/Common.styled';
import { fethcRegisterUser } from 'redux/auth/authOperations';
import { FormContact, Eror, ConteierRegister } from './Register.styled';
const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValue = { name: '', email: '', password: '' };

const RegisterUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { IconsExpand } = icons;

  const hendleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(fethcRegisterUser({ name, email, password }));
    resetForm();
    navigate('/contacts', { replace: true });
  };

  return (
    <ConteierRegister>
      <Formik
        initialValues={initialValue}
        onSubmit={hendleSubmit}
        validationSchema={validationSchema}
      >
        <FormContact>
          <Box
            marginTop="10px"
            marginBottom="100px"
            width="270px"
        >
          <Links to={location.state?.from ?? '/'}>
            <IconsExpand />
          </Links>
        </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gridGap="25px"
          >
            <Input type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" render={msg => <Eror>{msg}</Eror>} />

            <Input type="tel" name="email" placeholder="Email" />
            <ErrorMessage name="email" render={msg => <Eror>{msg}</Eror>} />

            <Input type="tel" name="password" placeholder="Password" />
            <ErrorMessage name="password" render={msg => <Eror>{msg}</Eror>} />

            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Box>
        </FormContact>
      </Formik>
    </ConteierRegister>
  );
};
export default RegisterUser;
