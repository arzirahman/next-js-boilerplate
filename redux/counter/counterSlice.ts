import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type CounterState = {
    value: number,
    loading: boolean
};

const initialState: CounterState = {
    value: 0,
    loading: false
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.loading = false;
                state.value += action.payload;
            })
            .addCase(incrementAsync.pending, (state) => {
                state.loading = true;
            })
    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync", 
    async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return 1;
    }
)

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer;