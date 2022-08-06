/* eslint-disable max-classes-per-file */
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class menuItemAttribute {
  @Field(() => ID)
  key!: string;

  @Field(() => String)
  value!: string;
}

@ObjectType()
export class MenuItem {
  @Field(() => ID, { description: 'O ID do item do menu' })
  ident!: string;

  @Field(() => String, { description: 'O nome do item do menu' })
  name!: string;

  @Field(() => String, {
    description: 'Página onde o item irá apontar.',
    nullable: true,
  })
  link?: string;

  @Field(() => String, { description: 'Ícone do item', nullable: true })
  Icon?: string;

  @Field(() => String, { description: 'Controle de acesso a página.' })
  access!: string;

  @Field(() => String, {
    description: 'Informa se o item estará disabilitado ou não.',
  })
  disabled!: boolean;

  @Field(() => [MenuItem], { description: 'Subitens do item', nullable: true })
  // eslint-disable-next-line no-use-before-define
  items?: MenuItem[];
}
