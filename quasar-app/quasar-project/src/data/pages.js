// src/data/pages.js

export function generateRouterArray(routes) {
    // Erzeuge das Array dynamisch basierend auf den Routen
    return routes.flatMap(route =>
      route.children ? route.children.map(child => ({
        name: child.name || child.path,
        path: route.path + (child.path ? `${child.path}` : '')
      })) : []
    );
  }
  