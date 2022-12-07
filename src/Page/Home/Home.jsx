import { Box, Conteier } from 'commonStyle/Common.styled';
import { Navigation } from 'components/Navigation/Navigations';

function Home() {

  return (
    <Conteier>
      <Navigation />

      <Box
        display="flex"
        alignItems="flex-end"
        gridGap="20px"
        justifyContent="space-around"
        mt={[155]}
      >
      </Box>
    </Conteier>
  );
}

export default Home;
