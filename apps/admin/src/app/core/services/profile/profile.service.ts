import { computed, inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';

interface ProfileSettingsConfig {
  accessToken: string | null;
  language: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private storageKey = 'dominos_profile';
  private readonly storage = inject(StorageService);

  settings = signal<ProfileSettingsConfig>(
    (this.storage.getItem(this.storageKey) as ProfileSettingsConfig)
    || { accessToken: null, language: 'uk-UA' });

  updateSettings(settings: Partial<ProfileSettingsConfig>) {
    this.settings.update((data) => ({ ...data, ...settings }));
    this.storage.setItem(this.storageKey, this.settings());
  }

  get(field: keyof ProfileSettingsConfig) {
    return this.settings()[field];
  }

  isAuthenticated = computed(() => !!this.get('accessToken'));
}
