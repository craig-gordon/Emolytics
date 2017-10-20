import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loggedInUser from './loggedInUser';
import testerQueue from './testerQueue';
import focusGroups from './focusGroups';
import currentFocusGroup from './currentFocusGroup';
import currentProject from './currentProject';
import currentSection from './currentSection';
import currentTesterOption from './currentTesterOption';
import signupwithfb from './signupwithfb';
import currentOptionAnnotations from './currentOptionAnnotations';
import currentOption from './currentOption';
import annotations from './annotations';
import lineGraphData from './lineGraphData';

const rootReducer = combineReducers({
  loggedInUser,
  testerQueue,
  focusGroups,
  currentFocusGroup,
  currentProject,
  currentSection,
  currentTesterOption,
  signupwithfb,
  currentOptionAnnotations,
  currentOption,
  annotations,
  lineGraphData,
  router: routerReducer
});

export default rootReducer;