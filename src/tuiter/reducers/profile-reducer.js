import { createSlice } from "@reduxjs/toolkit";
import owner from "../data/profile.json";

const initialState = {
    profile: owner
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        fetchProfile(state, action) {
            state.profile = action.payload.profile;
        },
        editProfile(state, action) {
            console.log('editProfile reducer received action', action);
            state.profile = action.payload.profile;
        },
        cancelEdit(state) {
            return state;
        }
    }
});

export const { fetchProfile, editProfile, cancelEdit } = profileSlice.actions;
export default profileSlice.reducer;