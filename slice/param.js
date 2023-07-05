import { createSlice } from "@reduxjs/toolkit";

const paramSlice = createSlice({
    name: "param",
    initialState: {
        value: {
            topic: "",
            difficulty: "",
        }
    },
    reducers: {
        topicUpdate(state, action) {
            state.value.topic = action.payload;
        },
        difficultyUpdate(state, action) {
            state.value.difficulty = action.payload;
        }
    }
});

export const { topicUpdate, difficultyUpdate } = paramSlice.actions;
export default paramSlice.reducer;
