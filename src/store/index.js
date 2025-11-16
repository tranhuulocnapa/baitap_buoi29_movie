import { configureStore } from "@reduxjs/toolkit"
import movieslice from "../movie/slice"

const store = configureStore({
    reducer: {
        movieslice,
    },

}
)
export default store;