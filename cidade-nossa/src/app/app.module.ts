import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PosterComponent } from './components/poster/poster.component';
import { RelatarProblemaComponent } from './pages/relatar-problema/relatar-problema.component';
import { SearchComponent } from './components/search/search.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FiltrosLateraisComponent } from './components/filtros-laterais/filtros-laterais.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { HashtagsPipe } from './shared/pipes/hashtags.pipe';
import { DataTransformPipePipe } from './shared/pipes/data-transform-pipe.pipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PosterComponent,
    RelatarProblemaComponent,
    SearchComponent,
    ProgressBarComponent,
    FiltrosLateraisComponent,
    DataTransformPipePipe,
    ComentariosComponent,
    HashtagsPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
