import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        ホームページ
      </Heading>
      <Text fontSize="lg">
        これはホームページのコンテンツです。
      </Text>
      <Link to="/about">Aboutページへ</Link>
    </Box>
  );
};

export default HomePage;