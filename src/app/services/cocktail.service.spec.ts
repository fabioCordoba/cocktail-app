/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CocktailService } from './cocktail.service';

describe('Service: Cocktail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CocktailService]
    });
  });

  it('should ...', inject([CocktailService], (service: CocktailService) => {
    expect(service).toBeTruthy();
  }));
});
