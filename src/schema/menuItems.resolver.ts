/* eslint-disable class-methods-use-this */
import { Arg, Query, Resolver } from 'type-graphql';

import { MenuItem } from './menuItems';
// eslint-disable-next-line no-unused-vars
import menuItems from './menuItems.json';

@Resolver(MenuItem)
export class MenuItemsResolver {
  @Query(() => MenuItem, { nullable: true })
  menuItem(@Arg('name', () => String) name: string): MenuItem | undefined {
    const menuItem = menuItems.find((item) => item.name === name);
    if (menuItem === undefined) {
      throw new Error('MenuItem not found');
    }
    return menuItem;
  }

  @Query(() => [MenuItem])
  menuItems(): MenuItem[] {
    return [
      {
        ident: 'home',
        name: 'Home',
        link: '/',
        Icon: 'BarChartIcon',
        access: 'default',
        disabled: false,
        items: undefined,
      },
    ];
  }
}
