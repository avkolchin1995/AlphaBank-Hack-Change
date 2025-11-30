import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import AuthEmployee from '../pages/AuthEmployee.tsx';
import ProfileEmployee from '../pages/ProfileEmployee.tsx';
import { Layout } from '../components/UI';
import ProfileClient from '../pages/ProfileClient.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: React.createElement(Navigate, {
            to: '/authEmployee',
            replace: true,
        }),
    },
    {
        path: '/authEmployee',
        element: React.createElement(AuthEmployee),
    },
    {
        path: '/',
        element: React.createElement(Layout),
        children: [
            {
                path: '/profileEmployee',
                element: React.createElement(ProfileEmployee),
            },
            {
                path: '/profileClient/:id',
                element: React.createElement(ProfileClient),
            },
        ],
    },
]);
