import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(categories: string[]): unknown {
    const categoriesString: string = this.capitalize(categories[0]) + ', ' + categories.slice(1, categories.length).join(', ')
    return (categoriesString.length > 20) ? categoriesString.substr(0, 20) +  ' ...' : categoriesString.substr(0, 25);
  }

  capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.substr(1, string.length)
  }

}
