import styled from 'styled-components';

type TypographyTypes = {
  variant: 'style1' | 'style2' | 'style3' | 'style4' | 'style5' | 'style6' | 'style7';
};

const TypographySizes = {
  style1: {
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '120%',
  },
  style2: {
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '160%',
  },
  style3: {
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '27px',
  },
  style4: {
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '142%',
  },
  style5: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '140%',
  },
  style6: {
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '140%',
  },
  style7: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '138%',
  },
};

export const StyledParagraph = styled.p<TypographyTypes>`
  line-height: ${(props) => TypographySizes[props.variant].lineHeight};
  font-weight: ${(props) => TypographySizes[props.variant].fontWeight};
  font-size: ${(props) => TypographySizes[props.variant].fontSize};
`;
