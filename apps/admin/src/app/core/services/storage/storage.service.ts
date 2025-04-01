import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

  setItem(key: string, value: object | string) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    const result = localStorage.getItem(key);

    if (result) {
      return JSON.parse(result);
    }

    return result;
  }

  clear() {
    localStorage.clear();
  }
}
