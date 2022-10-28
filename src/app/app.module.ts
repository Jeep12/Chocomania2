import { NgModule } from '@angular/core';

//MODULOS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { FireBaseErrorService } from './services/fire-base-error.service';
import { AuthService } from './services/auth.service';
import { AuthGuardian } from './utils/auth-guardian';
import { CookieService } from 'ngx-cookie-service';
import { LoadScriptsService } from './services/load-scripts.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //Modulo reactivo, distinta manera de obtener los datos de un formlario "FormGroup"
    ReactiveFormsModule,
    //Inicializo la aplicacion en Firebase, las propiedades que se envian por paremetro se obtienen del mismo firebase (en la web de firebase)
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(), 
    BrowserAnimationsModule
  ],
  providers: [
    FireBaseErrorService,
    AuthService,
    AuthGuardian,
    CookieService,
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
