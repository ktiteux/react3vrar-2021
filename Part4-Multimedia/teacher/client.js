// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location } from 'react-360-web';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    enableHotReload: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('teacher', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  const location = new Location([-6.5, 0, -3]);
  r360.renderToLocation(
    r360.createRoot('Satellite'),
    location,
  );

  const locationXwing = new Location([6, -2, -17]);
  r360.renderToLocation(
    r360.createRoot('Xwing'),
    locationXwing,
  );

  const locationTieFighter = new Location([4.5, 4, -20]);
  r360.renderToLocation(
    r360.createRoot('TieFighter'),
    locationTieFighter,
  );

  const locationEMU = new Location([4.5, 4, -20]);
  r360.renderToLocation(
    r360.createRoot('EMU'),
    locationEMU,
  );

  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('space.jpg'));
}

window.React360 = { init };
