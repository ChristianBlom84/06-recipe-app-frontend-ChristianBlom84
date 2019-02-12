// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  yummlyBaseUrl: `http://localhost:3000`,
  yummlyAppIdKey: `_app_id=bf0f07aa&_app_key=09bf347e34f10a3788229fab5ac2bb77`,
  yummlySearch: `http://localhost:3000/matches?q=`,
  yummlyRecipe: `http://localhost:3000/match`,
  yummlyPictures: `&requirePictures=true`
  // yummlyBaseUrl: `http://api.yummly.com/v1/api`,
  // yummlyAppIdKey: `?_app_id=bf0f07aa&_app_key=09bf347e34f10a3788229fab5ac2bb77`,
  // yummlySearch: `http://api.yummly.com/v1/api/recipes?_app_id=bf0f07aa&_app_key=09bf347e34f10a3788229fab5ac2bb77&`,
  // yummlyRecipe: `http://api.yummly.com/v1/api/recipe/`,
  // yummlyPictures: `&requirePictures=true`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
