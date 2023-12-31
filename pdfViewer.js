document.getElementById('load-pdf').addEventListener('click', function() {
    // PDF URL
    var pdfUrl = 'public/pdf/TaylorPayneResume.pdf';

    // PDF container
    var pdfContainer = document.getElementById('pdf-container');

    // Initialize PDF.js
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc) {
      // Set up the first page
      pdfDoc.getPage(1).then(function(page) {
        // Set scale (adjust as needed)
        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });

        // Create a canvas element to render the PDF
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Append canvas to the container
        pdfContainer.innerHTML = '';
        pdfContainer.appendChild(canvas);

        // Render PDF page to the canvas
        var renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    });
  });
