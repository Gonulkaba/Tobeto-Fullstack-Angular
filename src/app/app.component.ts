import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './features/auth/services/auth.service';
import { LoadingComponent } from './shared/components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.test().subscribe({
      next: (secretMessage) => {
        console.log(secretMessage);
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.authService.testAdmin().subscribe({
      next: (secretMessage) => {
        console.log(secretMessage);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
