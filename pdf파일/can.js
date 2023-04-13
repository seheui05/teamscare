var pdfPageView = new PDFPageView({
    container: container,
    id: pageIndex + 1,
    scale: scale,
    defaultViewport: viewport,
    eventBus: eventBus,
    renderingQueue: renderingQueue,
    textLayerFactory: textLayerFactory,
    annotationLayerFactory: annotationLayerFactory,
    imageResourcesPath: imageResourcesPath,
    renderInteractiveForms: renderInteractiveForms,
    renderer: renderer,
    l10n: l10n,
    enhanceTextSelection: enhanceTextSelection,
  });
  
  var canvas = pdfPageView.canvas;
  
  // willReadFrequently 속성 설정
  canvas.mozOpaque = true;
  canvas.willReadFrequently = true;
  