import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { LoginComponent } from './modules/login/pages/login.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { CatalogoListaFiltroComponent } from './modules/catalogo/componentes/catalogo-lista-filtro/catalogo-lista-filtro.component';
import { CatalogoItemComponent } from './modules/catalogo/pages/catalogo-item/catalogo-item.component';
import { CatalogoListaComponent } from './modules/catalogo/pages/catalogo-lista/catalogo-lista.component';
import { CatalogoRegistroComponent } from './modules/catalogo/pages/catalogo-registro/catalogo-registro.component';
import { CursoListaFiltroComponent } from './modules/curso/components/curso-lista-filtro/curso-lista-filtro.component';
import { CursoListaComponent } from './modules/curso/pages/curso-lista/curso-lista.component';
import { CursoRegistroComponent } from './modules/curso/pages/curso-registro/curso-registro.component';
import { UsuarioListaFiltroComponent } from './modules/usuario/components/usuario-lista-filtro/usuario-lista-filtro.component';
import { UsuarioListaComponent } from './modules/usuario/pages/usuario-lista/usuario-lista.component';
import { UsuarioRegistroComponent } from './modules/usuario/pages/usuario-registro/usuario-registro.component';
import { ActualizarClaveFormComponent } from './modules/actualizar-clave/pages/actualizar-clave-form/actualizar-clave-form.component';
import { CambiarClaveFormComponent } from './modules/cambiar-clave/pages/cambiar-clave-form/cambiar-clave-form.component';
import { DictarCursoListaFiltroComponent } from './modules/dictar-curso/components/dictar-curso-lista-filtro/dictar-curso-lista-filtro.component';
import { DictarCursoListaComponent } from './modules/dictar-curso/pages/dictar-curso-lista/dictar-curso-lista.component';
import { DictarCursoRegistroComponent } from './modules/dictar-curso/pages/dictar-curso-registro/dictar-curso-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
    CatalogoListaFiltroComponent,
    CatalogoItemComponent,
    CatalogoListaComponent,
    CatalogoRegistroComponent,
    CursoListaFiltroComponent,
    CursoListaComponent,
    CursoRegistroComponent,
    UsuarioListaFiltroComponent,
    UsuarioListaComponent,
    UsuarioRegistroComponent,
    ActualizarClaveFormComponent,
    CambiarClaveFormComponent,
    DictarCursoListaFiltroComponent,
    DictarCursoListaComponent,
    DictarCursoRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
