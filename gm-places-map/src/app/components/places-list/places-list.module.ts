import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { PlacesListComponent } from "./places-list.component";

@NgModule({
  declarations: [PlacesListComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [PlacesListComponent],
})
export class PlacesListModule {}
