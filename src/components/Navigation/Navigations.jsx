import { Box, Links, LinksContacts } from 'commonStyle/Common.styled';
import { useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  return (
    <>
      <Box
        as="nav"
        display="flex"
        flexDirection="column" 
        justifyContent="flex-end"
        alignItems="center"
        gridGap="15px"
      >
        <LinksContacts to="/contacts" state={{ from: location }}>
          Contacts
        </LinksContacts>
        <Links to="/register" state={{ from: location }}>
          Register
        </Links>
        <Links to="/login" state={{ from: location }}>
          Login
        </Links>
      </Box>
    </>
  );
}
