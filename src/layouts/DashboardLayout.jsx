import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


export default function DashboardLayout({ title = 'Dashboard', children }) {
return (
<div className="min-h-screen flex">
<Sidebar />
<div className="flex-1 p-6">
<Header title={title} />
<main className="mt-6">{children}</main>
</div>
</div>
)
}