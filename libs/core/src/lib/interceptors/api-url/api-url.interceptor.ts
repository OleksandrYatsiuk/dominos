import { HttpInterceptorFn } from '@angular/common/http';

export const apiUrl = 'https://dominos-lije.onrender.com';

const isAbsoluteLink = (url: string): boolean => {
  const absolutePattern = /^https?:\/\//i;
  return absolutePattern.test(url);
}

const prepareLink = (path: string): string => {
  const url = isAbsoluteLink(path) ? path : `${apiUrl}/${path}`;
  return url.replace(/([^:]\/)\/+/g, '$1');
}

export const ApiUrlInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({ url: prepareLink(req.url) });
  return next(req);
};

