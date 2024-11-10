import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        アバウトページ
      </Heading>
      <Text fontSize="lg">
        これはアバウトページのコンテンツです。
      </Text>
    </Box>
  );
};

export default AboutPage;