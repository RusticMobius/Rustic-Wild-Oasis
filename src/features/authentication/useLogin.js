import { login as loginApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {
        isPending,
        mutate: login
    } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data.user)
            navigate('/dashboard', { replace: true })
        },
        onError: () => {
            toast.error("Provided email or password are incorrect")
        }
    })

    return { isPending, login }
}