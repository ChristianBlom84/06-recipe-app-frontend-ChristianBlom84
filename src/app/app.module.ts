import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesModule } from './recipes/recipes.module';
import { ListsModule } from './lists/lists.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesModule,
    ListsModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [
          'recipeapp.test',
          'localhost',
          'u07.christianblom.se'
        ],
        blacklistedRoutes: [
          'localhost:4200/login',
          'api.yummly.com/v1/api'
        ]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
