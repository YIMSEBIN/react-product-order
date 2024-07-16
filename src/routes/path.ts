export const RouterPath = {
  root: '/',
  home: '/',
  theme: '/theme/:themeKey',
  product: '/products/:productKey',
  order: '/order',
  myAccount: '/my-account',
  login: '/login',
  notFound: '*',
};

export const getDynamicPath = {
  theme: (themeKey: string) => RouterPath.theme.replace(':themeKey', themeKey),
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.href;
    return `${RouterPath.login}?redirect=${encodeURIComponent(currentRedirect)}`;
  },
  product: (productKey: string) => RouterPath.product.replace(':productKey', productKey),
};
