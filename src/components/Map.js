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
        src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Google,%208th%20Avenue,%20New%20York,%20NY,%20USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
