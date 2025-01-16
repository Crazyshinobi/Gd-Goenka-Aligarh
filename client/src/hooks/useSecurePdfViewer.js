import { useCallback } from 'react';

export const useSecurePdfViewer = () => {
  const openSecurePdf = useCallback((pdfUrl) => {
    const pdfWindow = window.open(pdfUrl, '_blank');

    if (pdfWindow) {
      pdfWindow.onload = () => {
        // Inject CSS to hide download button and disable text selection
        const style = pdfWindow.document.createElement('style');
        style.textContent = `
          #download, #print, .textLayer, #viewBookmark { display: none !important; }
          * { user-select: none !important; }
        `;
        pdfWindow.document.head.appendChild(style);

        // Disable right-click
        pdfWindow.document.addEventListener('contextmenu', (e) => e.preventDefault());

        // Disable keyboard shortcuts
        pdfWindow.document.addEventListener('keydown', (e) => {
          if (
            (e.ctrlKey && (e.key === 'p' || e.key === 's')) || // Prevent print and save
            (e.altKey && e.key === 'p') // Prevent print dialog
          ) {
            e.preventDefault();
          }
        });

        // Overwrite the window.print function
        pdfWindow.print = () => {
          console.log('Printing is disabled');
        };
      };
    }
  }, []);

  return { openSecurePdf };
};

