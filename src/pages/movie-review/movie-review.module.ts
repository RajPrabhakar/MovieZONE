import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieReviewPage } from './movie-review';
import { DirectivesModule } from "../../directives/directives.module";

@NgModule({
  declarations: [
    MovieReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieReviewPage),
    DirectivesModule
  ],
})
export class MovieReviewPageModule {}
