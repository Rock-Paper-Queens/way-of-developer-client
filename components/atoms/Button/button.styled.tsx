import tw, { styled } from "twin.macro";

interface StyledButtonProps {
  hasHover?: boolean;
}

export const BasicButton = styled.button<StyledButtonProps>(({ hasHover }) => [
  tw`bg-black w-auto text-white`, // Add base styles first
  hasHover && tw`hover:border-black bg-white text-black`, // Then conditional styles
  // !hasHover && stylesWidth, // Then any css/sass in variables
]);
