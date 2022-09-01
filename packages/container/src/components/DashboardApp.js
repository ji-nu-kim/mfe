import { dashboardMount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    dashboardMount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
