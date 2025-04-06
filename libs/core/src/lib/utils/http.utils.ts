import { HttpParams } from '@angular/common/http';

export function convertQueryParams(params: object = {}) {
    let httpParams = new HttpParams();
    Object.entries(params || {}).forEach(([key, value]) => {
        if (value !== undefined) {
            httpParams = httpParams.append(String(key), value);
        }
    });
    return httpParams;
}
