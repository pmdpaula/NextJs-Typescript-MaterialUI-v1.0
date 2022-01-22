import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { ReactNode } from 'react';
// import styled, { ThemeContext } from 'styled-components';

const AxFooterWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const AxFooterBox = styled(Paper)`
  background: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 14px;
  height: 1.8rem;
  padding: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface AxFooterProps {
  content: ReactNode;
}

const AxFooter = ({ content }: AxFooterProps): JSX.Element => (
  // const theme = useContext(ThemeContext);

  <AxFooterWrapper>
    <AxFooterBox elevation={3}>
      <Typography
        variant="caption"
        color="secondary.contrastText"
        // style={{ color: palette.secondary.contrastText }}
      >
        {content}
      </Typography>
    </AxFooterBox>
  </AxFooterWrapper>
);
export default AxFooter;
