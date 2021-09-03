import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { Dog } from '../models/dog';
import { FavoritesService } from '../services/favorites.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  dogs: Dog[] = [];
  favorites: Dog[] = [];
  viewFavorites = false;

  constructor(private dogService: DogsService,
              private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.dogService.all().subscribe(data => this.dogs = data);
    this.favoritesService.all().subscribe(favorites => this.favorites = favorites);
  }

  loadDogs() {
    this.viewFavorites = false;
  }

  loadFavorites() {
    this.viewFavorites = true;
  }
}
