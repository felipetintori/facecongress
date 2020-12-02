import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { SobreComponent } from './sobre/sobre.component';
import { MenuInternasComponent } from './menu-internas/menu-internas.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpoComponent } from './expo/expo.component';
import { AdesaoComponent } from './adesao/adesao.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { SingleComponent } from './programacao/single/single.component';
import { MateriaService } from './services/materia.service';
import { AnalyticsService } from './services/analytics.service';
import { Intro2Component } from './intro2/intro2.component';
import { AberturaComponent } from './abertura/abertura.component';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { AtividadeParalelaComponent } from './atividade-paralela/atividade-paralela.component';
import { LivroComponent } from './livro/livro.component';
import { MateriaListaHomeComponent } from './materia/materia-lista-home/materia-lista-home.component';
import { MateriaListaCompletaComponent } from './materia/materia-lista-completa/materia-lista-completa.component';
import { MateriaSingleComponent } from './materia/materia-single/materia-single.component';
import { HospedagemComponent } from './hospedagem/hospedagem.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    SobreComponent,
    MenuInternasComponent,
    ProgramacaoComponent,
    ExpoComponent,
    AdesaoComponent,
    SingleComponent,
    InformacoesComponent,
    Intro2Component,
    AberturaComponent,
    BannerComponent,
    Banner2Component,
    PatrocinadoresComponent,
    AtividadeParalelaComponent,
    LivroComponent,
    MateriaListaHomeComponent,
    MateriaListaCompletaComponent,
    MateriaSingleComponent,
    HospedagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MzButtonModule,
    MzInputModule,
    HttpClientModule
  ],
  exports: [
    MzInputModule
  ],

  providers: [
    AnalyticsService,
    MateriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
