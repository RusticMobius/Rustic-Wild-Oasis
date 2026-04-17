import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
    const queryClient = useQueryClient()
    const { isPending: isUpdating, mutate: updateUser } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({ user }) => {
            toast.success('User account successfully updated')
            // queryClient.invalidateQueries({ queryKey: ['user'] })
            queryClient.setQueryData(['user'], user)
        },
        onError: () => toast.error('There was an error when updating current user')
    })
    return { isUpdating, updateUser }
}