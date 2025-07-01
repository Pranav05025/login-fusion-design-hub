
import React, { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import TaskDashboard from '@/components/TaskDashboard';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <TaskDashboard onLogout={handleLogout} />;
};

export default Index;
