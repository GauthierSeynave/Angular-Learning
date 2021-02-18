import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
=======
import { ActualiteComponent } from './components/actualite/actualite.component';
import { ArticleComponent } from './components/article/article.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { ListMultimediaComponent } from './components/list-multimedia/list-multimedia.component';
import { ListActualiteComponent } from './components/list-actualite/list-actualite.component';
>>>>>>> a319c95002c3026474dddb3b1013d3b67537d228

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    FooterComponent
=======
    ActualiteComponent,
    ArticleComponent,
    MultimediaComponent,
    ListMultimediaComponent,
    ListActualiteComponent
>>>>>>> a319c95002c3026474dddb3b1013d3b67537d228
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
