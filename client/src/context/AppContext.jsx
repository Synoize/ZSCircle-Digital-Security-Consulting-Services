import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const currencySymbol = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const localStorageToken = localStorage.getItem('token')
    const [token, setToken] = useState(localStorageToken ? localStorageToken : false)

    const [userData, setUserData] = useState(false);
    const [ dashboardData, setDashboardData] = useState();

    const getUserProfileData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, { headers: { Authorization: `Bearer ${token}` } })

            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const getDashboardData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/dashboard`)
            
            if (data.success) {
                setDashboardData(data.dashData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getDashboardData();
    }, [])

    useEffect(() => {
        if (token) {
            getUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    const value = {
        axios, currencySymbol, backendUrl, dashboardData,
        token, setToken,
        userData, setUserData, getUserProfileData,

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
