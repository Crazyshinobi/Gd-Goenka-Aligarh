import React, { useEffect } from 'react';

const PDFViewer = ({ url }) => {
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    document.body.innerHTML = '';
    document.body.appendChild(iframe);

    const preventDefaultActions = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', preventDefaultActions);
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.key === 's' || e.key === 'p')) {
        e.preventDefault();
      }
    });

    return () => {
      document.body.removeChild(iframe);
      document.removeEventListener('contextmenu', preventDefaultActions);
    };
  }, [url]);

  return null;
};

export default PDFViewer;
