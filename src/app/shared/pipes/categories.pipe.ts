import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(value: any, staticData: any): any {
    let allCategories = [];
    allCategories = staticData.categoryList;
    const categoryName = allCategories.filter(item => item.category_id === value);
    return categoryName[0].category_name;
  }

}
