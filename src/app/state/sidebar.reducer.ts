import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { toggleSideBar } from "./sidebar.actions";

export const initialState = false;

const _sideBarReducer = createReducer(
    initialState,
    on(toggleSideBar, (state: boolean) => !state),

);

export function sideBarReducer(state: any, action: any) {
    return _sideBarReducer(state, action);
}
