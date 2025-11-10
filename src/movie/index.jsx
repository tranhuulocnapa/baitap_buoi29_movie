import React from "react";
import Booking from "./booking";
import Seats from "./seats"

export default function Movie() {


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative px-4"
            style={{ backgroundImage: "url('/img/bgmovie.jpg')" }} >

           
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-8 tracking-wide text-center">
                🎬 Chọn Ghế Xem Phim
            </h1>

            <div className="relative bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-10 w-full max-w-6xl backdrop-blur-sm border border-white/30">

                <Booking />
                <Seats />

            </div>
        </div>
    );
}
