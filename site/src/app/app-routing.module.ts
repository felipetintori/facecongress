import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { ExpoComponent } from './expo/expo.component';
import { CommonModule } from '@angular/common';
import { AdesaoComponent } from './adesao/adesao.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { SingleComponent } from './programacao/single/single.component';
import { AberturaComponent } from './abertura/abertura.component';
import { AtividadeParalelaComponent } from './atividade-paralela/atividade-paralela.component';
import { LivroComponent } from './livro/livro.component';
import { MateriaSingleComponent } from './materia/materia-single/materia-single.component';
import { MateriaListaCompletaComponent } from './materia/materia-lista-completa/materia-lista-completa.component';
import { HospedagemComponent } from './hospedagem/hospedagem.component';

const routes: Routes = [
  { path: '', component:AberturaComponent},
    { path: 'home', component:HomeComponent},
    { path: 'sobre', component:SobreComponent},
    { path: 'programacao', component:ProgramacaoComponent},
    { path: 'expo', component:ExpoComponent},
    { path: 'adesao', component:AdesaoComponent},
    { path: 'informacoes', component:InformacoesComponent},
    { path: 'programacao/single/:id/:tema', component: SingleComponent},
    { path: 'programacao/single', component: SingleComponent},
    { path: 'atividade-paralela', component: AtividadeParalelaComponent},
    { path: 'livro', component: LivroComponent},
    { path: 'materia/:id', component: MateriaSingleComponent},
    { path: 'todas-noticias', component: MateriaListaCompletaComponent },
    { path: 'hospedagem', component: HospedagemComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
    exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
