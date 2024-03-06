import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatSidenav, MatSidenavModule, CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
  animations: [
    trigger('dropdownAnimation', [
      state('true', style({ opacity: 1, transform: 'translateY(0)' })),
      state('false', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition('true <=> false', animate('200ms ease-in-out'))
    ])
  ]
})
export class SidebarMenuComponent {
  // showFiller = false;

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

  }

  isDropdownOpen: boolean = false;

  toggleDropdown(status: boolean) {
    this.isDropdownOpen = status;
  }

}
