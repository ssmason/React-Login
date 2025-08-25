import './Dashboard.css';
import { useState } from 'react';
import React from 'react'
export const Dashboard = ( { user, setUser } ) => {


    const handleLogout = () => {
        setUser(null);
    };

  return (
    <div className="dashboard">
        <h2>Welcome back {user}</h2>
        <h3>Dashboard</h3>
        <p>Welcome to your dashboard! Here you can manage your tasks and view your progress.</p>
        
        <ul>
            <li>Create, edit, and delete tasks.</li>
            <li>Mark tasks as complete or incomplete.</li>
            <li>View your task list and filter by status.</li>
            <li>Track your productivity over time.</li>

            <li><button type="button" onClick={handleLogout}>Logout</button></li>
        </ul>
    </div>
  )
}