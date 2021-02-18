import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { ArticleComponent } from './components/article/article.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { ListMultimediaComponent } from './components/list-multimedia/list-multimedia.component';
import { ListActualiteComponent } from './components/list-actualite/list-actualite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActualiteComponent,
    ArticleComponent,
    MultimediaComponent,
    ListMultimediaComponent,
    ListActualiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
