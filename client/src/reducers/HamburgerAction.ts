import { OPEN_HAMBURGER, CLOSE_HAMBURGER } from "../constants/actionTypes";

interface OpenHamburgerAction {
  type: typeof OPEN_HAMBURGER;
}

interface CloseHamburgerAction {
  type: typeof CLOSE_HAMBURGER;
}

export function toggleHamburger(
  state = false,
  action: OpenHamburgerAction | CloseHamburgerAction
): boolean {
  switch (action.type) {
    case OPEN_HAMBURGER:
      return true;
    case CLOSE_HAMBURGER:
      return false;
    default:
      return state;
  }
}
