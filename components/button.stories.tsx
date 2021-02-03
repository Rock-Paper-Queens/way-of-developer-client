import { Box } from '@chakra-ui/react';

export const DefaultBox = ({ ...args }) => (
  <Box color="red" {...args}>
    {'스토리북 테스트'}
  </Box>
);
const TextStories = {
  title: 'atoms/Box',
  component: Box,
};

export default TextStories;
