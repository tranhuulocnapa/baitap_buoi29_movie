import { createSlice } from "@reduxjs/toolkit"
import data from "./data.json";

const initialState = {
    products: data,
    selectedSeats: [],
    bookedSeats: data.flatMap(row =>
        row.danhSachGhe
            .filter(ghe => ghe.daDat === true)
            .map(ghe => ({
                seatNumber: ghe.soGhe,
                setPrice: ghe.gia
            }))
    )
};

const movieslice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setselectedSeats: (state, action) => {
            const seat = action.payload;

            const seatdangchon = {
                seatNumber: seat.soGhe,
                setPrice: seat.gia,
            };


            const isSelected = state.selectedSeats.some(
                (item) => item.seatNumber === seatdangchon.seatNumber
            );

            if (isSelected) {

                state.selectedSeats = state.selectedSeats.filter(
                    (item) => item.seatNumber !== seatdangchon.seatNumber
                );
            } else {
                state.selectedSeats.push(seatdangchon);
            }
        },

        setcomfirmBooking: (state, action) => {
            const seat = action.payload;

            state.bookedSeats.push(...seat)
            state.selectedSeats = []

        }
    }
}
)

export const { setselectedSeats, setcomfirmBooking } = movieslice.actions;
export default movieslice.reducer