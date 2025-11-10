import React from 'react'

export default function Booking() {

    const selectedSeats = ["B3", "B4", "D6"]; // ghế đang chọn (demo)



    return (
        <>


            {/* --- Cột trái: Thông tin đặt vé --- */}
            <div className="md:w-1/3 w-full space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-gray-300">
                    Thông Tin Đặt Vé
                </h2>

                {/* Ô nhập tên */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Tên của bạn</label>
                    <input
                        type="text"
                        placeholder="Nhập tên của bạn"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    />
                </div>

                {/* Tổng tiền */}
                <div>
                    <p className="font-medium text-gray-700">Tổng cộng:</p>
                    <p className="text-3xl font-semibold text-blue-600">
                        ${selectedSeats.length * 15}.00
                    </p>
                </div>

                {/* Nút xác nhận */}
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md">
                    Xác Nhận Đặt Vé
                </button>

                {/* Danh sách ghế đã chọn */}
                <div className="border-t border-gray-300 pt-4">
                    <h3 className="font-semibold mb-3 text-gray-800 text-lg">Ghế đã chọn:</h3>
                    <div className="flex flex-col gap-2 max-h-56 overflow-y-auto">
                        {selectedSeats.length > 0 ? (
                            selectedSeats.map((seat) => (
                                <div
                                    key={seat}
                                    className="flex justify-between items-center bg-green-50 border border-green-200 rounded-md px-3 py-2 text-sm"
                                >
                                    <span className="font-semibold text-gray-700">{seat}</span>
                                    <span className="text-green-700 font-medium">$15</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm italic">Chưa chọn ghế nào</p>
                        )}
                    </div>
                </div>
            </div>






        </>
    )
}
