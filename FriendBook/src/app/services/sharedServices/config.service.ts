import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _, { PropertyPath } from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private _http: HttpClient) {

  }
  public get(key: PropertyPath) {
    let config;
    this._http.get('../../../assets/config/config.json').subscribe((configs) => {
      config = configs;
      const value = _.get(config, key);
      if (value === undefined) {
        throw TypeError(`Error: ${key.toString()} not found in config !!`);
      }
      return value;
    });
  }
}
