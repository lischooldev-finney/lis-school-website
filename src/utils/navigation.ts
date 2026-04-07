const internalRoutePattern = /^\/(about|curriculum|facilities|activities|academics|admissions|gallery|contact)?(?:#.*)?$/;

export const normalizePath = (path: string) => {
  if (path.startsWith('#/')) {
    return path.slice(1);
  }

  if (!path.startsWith('/')) {
    return path;
  }

  return path || '/';
};

export const getRoutePath = (path: string) => {
  const normalized = normalizePath(path);
  return normalized.split('#')[0] || '/';
};

export const getCurrentPath = () => {
  if (window.location.hash.startsWith('#/')) {
    return getRoutePath(window.location.hash.slice(1));
  }

  const pathname = window.location.pathname || '/';
  return internalRoutePattern.test(pathname) ? getRoutePath(pathname) : '/';
};

export const navigateTo = (path: string) => {
  const normalized = normalizePath(path);

  if (
    normalized.startsWith('http') ||
    normalized.startsWith('mailto:') ||
    normalized.startsWith('tel:')
  ) {
    window.location.href = normalized;
    return;
  }

  if (!internalRoutePattern.test(normalized)) {
    window.location.href = normalized;
    return;
  }

  window.history.pushState({}, '', normalized);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
