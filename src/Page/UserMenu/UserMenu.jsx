import { Box, Links, icons } from 'commonStyle/Common.styled';
import { Phonebook } from 'components/PhoneBook/PhoneBook';
import { ConteierContacts, NameText } from './UserMenu.styled';
import { fetchLogOutUser } from 'redux/auth/authOperations';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authUserSelector, authTokenSelector } from 'redux/auth/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function UserMenu() {
  const location = useLocation();
  const { name } = useSelector(authUserSelector);
  const token = useSelector(authTokenSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { IconsExpand } = icons;

  const handleLogOutUser = () => {
    dispatch(fetchLogOutUser());
    navigate('/');
  };
  return (
    <>
      <ConteierContacts>
        <Box
          marginTop="10px"
          width="270px"
        >
          <Links to={location.state?.from ?? '/'}>
            <IconsExpand />
          </Links>
        </Box>
        <Box
          width="300px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gridGap={[20]}
          px={[3]}
          marginTop="70px"
          marginBottom="30px"
        >
          <NameText>Hello {name}</NameText>

          <Button
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={handleLogOutUser}
          >
            Logout
          </Button>
        </Box>
        {token && <Phonebook />}
      </ConteierContacts>
    </>
  );
}

export default UserMenu;
