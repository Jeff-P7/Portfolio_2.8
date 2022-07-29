import React, { FC } from 'react';
// import IHeader from './header.d';
// import HeaderProps from './header.props';
// import classNames from "classnames";
// import { classesToString, purgeEmptyProps } from '../../sharedglobal';
import { Div, Text } from '../../../shared/atomicUI/atoms';

// import { Tabs, Tab, Slide, Fade } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';

// Material UI Tabs Styles
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

interface IProps {
  isOpen: boolean;
}

/**
 * Header Component
 */
export const Header: FC<IProps> = ({ isOpen = false }): JSX.Element => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Div colorize>
      <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
        {/** reason for this div and the other below is to avoid the component from crashing given it does not work well when StyledTab is the direct child of Slide or Fade*/}
        <div>
          <Fade in={isOpen}>
            <div>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
              >
                <StyledTab label="Home" />
                <StyledTab label="Projects" />
                <StyledTab label="Blogs" />
                <StyledTab label="Experience" />
                <StyledTab label="About" />
                <StyledTab label="Contact" />
              </StyledTabs>
            </div>
          </Fade>
        </div>
      </Slide>
    </Div>
  );
};

// Header.propTypes = HeaderProps.type;
// Header.defaultProps = HeaderProps.default;

export default Header;
