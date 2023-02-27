import { Navigate, Route, Routes } from 'react-router-dom';
import { TabApp } from '../shared/components/tab/Tab';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<TabApp open={true} />} />
            <Route path="*" element={<Navigate to={'/home'} />} />
        </Routes>
    );
};
