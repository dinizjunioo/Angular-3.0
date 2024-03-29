import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { CommentComponent } from './courses/tabs/comment.component'

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
