import {dashboard, expenses, takeaway, transactions, trend, dollar} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    // {
    //     id: 2,
    //     title: "View Transactions",
    //     icon: transactions,
    //     link: "/dashboard",
    // },
    {
        id: 3,
        title: "Savings",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Buy Products",
        icon: dollar,
        link: "/dashboard",
    },
]