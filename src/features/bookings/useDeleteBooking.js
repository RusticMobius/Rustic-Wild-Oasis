import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
    // const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { isPending: isDeleting,
        mutate: deleteBooking

    } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            toast.success('Booking Successfully delete')
            queryClient.invalidateQueries({ queryKey: ['bookings'] })
            // navigate('/')
        },
        onError: () => {
            toast.error("There was an error when deleting booking")
        }
    })
    return { isDeleting, deleteBooking }
}