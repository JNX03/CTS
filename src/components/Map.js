import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

function Map() {
  const location = useLocation();

  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const text = searchParams.get('text') || 'Map Page';
    const type = searchParams.get('type') || 'info'; // info, error, check
    const time = searchParams.get('time') || 0; // Time in seconds
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
    <div style={styles.mapContainer}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1520.9373140618582!2d99.00587666534108!3d18.796884383161544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3aac983453af%3A0xf7754b6645d9a9a2!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Lib4Lij4Li04LiZ4Liq4LmM4Lij4Lit4Lii4LmB4Lii4Lil4Liq4LmM4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii!5e0!3m2!1sth!2sth!4v1726907204910!5m2!1sth!2sth"
        title="Google Maps"
        style={styles.iframe}
      ></iframe>
    </div>
  );
}

const styles = {
  mapContainer: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    marginTop: '60px',
  },
  iframe: {
    border: 'none',
    height: '100%',
    width: '100%',
  },
};

export default Map;
