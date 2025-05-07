import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('btnLogin', { static: true })
  btnLogin!: ElementRef<HTMLButtonElement>;
  @ViewChild('btnHero', { static: true })
  btnHero!: ElementRef<HTMLButtonElement>;
  @ViewChild('heroContent', { static: true })
  heroContent!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    // Adiciona evento ao botão de login
    this.btnLogin.nativeElement.addEventListener('click', () => {
      console.log('Botão Entrar clicado');
    });

    // Adiciona evento ao botão de herói
    this.btnHero.nativeElement.addEventListener('click', () => {
      alert('Em breve você saberá mais!');
    });

    // Configura o IntersectionObserver para o conteúdo do herói
    if (this.heroContent) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.heroContent.nativeElement.classList.add('fade-in-visible');
              observer.unobserve(this.heroContent.nativeElement); // dispara só uma vez
            }
          });
        },
        {
          threshold: 0.5, // dispara quando metade do conteúdo estiver visível
        }
      );

      observer.observe(this.heroContent.nativeElement);
    }
  }
}
