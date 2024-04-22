// routes.js (路由配置文件)
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/home';
import Blog from '../pages/Blog/blog';
import cardPage from '../pages/cardPage/cardPage';


const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/blog',
        component: Blog,
        exact: true
    },
    {
        path: '/cardPage',
        component: cardPage,
        exact: true
    }
];

const renderRoutes = () => (
    <Routes>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={<route.component />} // 使用 element 属性来指定要渲染的组件
            />
        ))}
    </Routes>

);

export default renderRoutes;
