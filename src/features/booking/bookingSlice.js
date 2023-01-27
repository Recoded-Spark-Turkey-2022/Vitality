import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    answers: {
        answer1 : "",
        answer2: "",
        answer3: false,
        answer4: "",
        answer5: "",
        answer6: "",
    }
}

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setAnswer1: (state, action) => {
            state.answers.answer1 = action.payload
        },
        setAnswer2: (state, action) => {
            state.answers.answer2 = action.payload
        },
        setAnswer3: (state, action) => {
            state.answers.answer3 = action.payload
        },
        setAnswer4: (state, action) => {
            state.answers.answer4 = action.payload
        },
        setAnswer5: (state, action) => {
            state.answers.answer5 = action.payload
        },
        setAnswer6: (state, action) => {
            state.answers.answer6 = action.payload
        }
    }
})

export const {
    setAnswer1, 
    setAnswer2, 
    setAnswer3, 
    setAnswer4, 
    setAnswer5, 
    setAnswer6
} = bookingSlice.actions

export const answerObj = (state) => state.booking.answers

export default bookingSlice.reducer