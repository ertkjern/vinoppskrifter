import { Component } from '@angular/core';

@Component({
    selector: 'recipes',
    templateUrl: 'recipes.component.html'
})
export class RecipesComponent {

    recipesTestData = [
      {
        title: "God hjemmelaget ripsvin",
        shortDesc: "En veldig god ripsvin laget på 12 uker",
        percentage: 14
      },
      {
        title: "Eplevin",
        shortDesc: "Søt og god eplevin med høy prosent",
        percentage: 19
      },
      {
        title: "Druevin",
        shortDesc: "God vin! Enkel å lage",
        percentage: 14
      },
      {
        title: "Testvin",
        shortDesc: "Ikke god....",
        percentage: 8
      },
      {
        title: "Søt eplevin",
        shortDesc: "Mye sukker! Mye Alokol!",
        percentage: 22
      },
      {
        title: "Rips og blåbær. Nam!",
        shortDesc: "En veldig god ripsvin laget på 12 uker",
        percentage: 14
      }
    ]


    constructor() { }

    ngOnInit() { }

}
