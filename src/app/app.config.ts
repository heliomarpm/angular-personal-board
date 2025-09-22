import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { type ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from "@angular/core";
import { provideRouter, withViewTransitions } from "@angular/router";

import { routes } from "./app.routes";

registerLocaleData(localePt); // Registre os dados de localização

export const appConfig: ApplicationConfig = {
	providers: [
		{ provide: LOCALE_ID, useValue: "pt-BR" }, 
		provideBrowserGlobalErrorListeners(), 
		provideZonelessChangeDetection(), 
		provideRouter(routes, withViewTransitions())
	],
};
