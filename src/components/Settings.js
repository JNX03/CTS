import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

function Settings() {
  const location = useLocation();

  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const text = searchParams.get('text') || 'Settings Page';
    const type = searchParams.get('type') || 'info';
    const time = searchParams.get('time') || 0;
    return { text, type, time: parseInt(time) };
  };

  const triggerSweetAlert = () => {
    const { text, type } = getQueryParams();
    Swal.fire({
      title: text,
      icon: type === 'error' ? 'error' : type === 'check' ? 'success' : 'info',
      confirmButtonText: 'Okay',
    });
  };

  useEffect(() => {
    const { time } = getQueryParams();
    
    if (time > 0) {
      setTimeout(() => {
        triggerSweetAlert();
      }, time * 1000);
    }
  }, [location]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Settings</h1>
      <p style={styles.text}>Customize your Car Traffic System settings here.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#555',
  },
};

export default Settings;
