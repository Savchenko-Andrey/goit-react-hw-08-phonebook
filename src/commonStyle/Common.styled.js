import styled, { createGlobalStyle } from 'styled-components';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Field } from 'formik';
import { theme } from 'Thema';
import { Link } from 'react-router-dom';
import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from 'styled-system';

export const Box = styled('div')(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.white};
  }
  h1,
  h2,
  h3 {
    padding: 0%;
    margin: 0;
    font-family: ${theme.fonts.heading};
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
    color: ${theme.colors.black};
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const Input = styled(Field)`
  position: relative;
  width: ${p => p.theme.space[8] + 30}px;
  padding: ${p => p.theme.space[3]}px;
  outline: none;
  border: none;
  background-color: transparent;
  border: ${p => p.theme.borders.bold};
  color: white;
  background: transparent;
  border-radius: ${p => p.theme.radii.md};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
  transition: border 250ms, box-shadow 250ms;

  :hover,
  :focus {
    box-shadow: 2px 2px 3px #ffd700;
    ::placeholder {
      color: transparent;
    }
  }
`;

export const Links = styled(Link)`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.sx};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
`;

export const LinksContacts = styled(Links)`
  margin-top: 70px;
  font-size: 30px;
`;

export const Conteier = styled.div`
  width: 330px;
  height: 690px;
  padding: ${p => p.theme.space[3]}px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/IPhone_13_vector.svg/1200px-IPhone_13_vector.svg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 55px;
`;

const IconsRecord = styled(FiberManualRecordIcon)`
  width: 20px;
  height: 20px;
  color: #000;
`;

const IconsExpand = styled(ExpandCircleDownIcon)`
  width: 20px;
  height: 20px;
  rotate: 90deg;
  :hover {
    cursor: pointer;
    fill: black;
    scale: 1.05;
  }
`;
const IconsCheckBox = styled(CheckBoxOutlineBlankIcon)`
  width: 20px;
  height: 20px;
  rotate: 90deg;
  :hover {
    cursor: pointer;
    fill: black;
    scale: 1.05;
  }
`;
const IconsStanby = styled(ModeStandbyIcon)`
  width: 20px;
  height: 20px;
  rotate: 90deg;
  :hover {
    cursor: pointer;
    fill: black;
    scale: 1.05;
  }
`;

export const icons = {
  IconsCheckBox,
  IconsExpand,
  IconsRecord,
  IconsStanby,
};
