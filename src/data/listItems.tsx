import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import WatchIcon from '@mui/icons-material/Watch';
import { ElementType } from 'react';

// import ReactHtmlParser from 'react-html-parser';
import { HttpClient } from '../infra/http/HttpClient';
// import { ReactNode } from 'react';

export interface menutItemsProps {
  ident: string;
  link?: string;
  name: string;
  Icon?: ElementType;
  access: string;
  disabled: boolean;
  items?: menutItemsProps[];
}

// eslint-disable-next-line operator-linebreak
// const TOKEN =
// eslint-disable-next-line max-len
//   'lsdioNCSD2$DA3TY%K8ASLKAUCASDN_UCVXKN9u0jefOILc!PSDUFlkjsdfnvasdf908uq4ihrfcq vn9h87098890fas984asdfadgs-gsd54fgasd';
// const url = 'http://infra-apl-01.trt1.jus.br:4000/menuItems';

// const getMenuItems = () => {
//   HttpClient(url, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//     // refresh: true,
//   })
//     .then(async (response) => {
//       console.log(response);
//       return response;
//     })
//     .then(async (response) => {
//       const converted = await response.map((item: any) => {
//         const Icon = ReactHtmlParser(item.Icon);

//         return { ...response, Icon };
//         // const Icon = item.Icon
//       });
//       // if (!response.ok) throw new Error('Usuário não autorizado.');

//       // console.log(response.body.data);

//       return converted;
//     });
// };

export const menutItems: menutItemsProps[] = [
  {
    ident: 'home',
    link: '/',
    name: 'Home',
    Icon: BarChartIcon,
    access: 'default',
    disabled: false,
  },
  {
    ident: 'dashboard',
    // link: '/dashboard',
    name: 'Dashboard',
    Icon: HomeIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'dashboard:general',
        link: '/dashboard/general',
        name: 'Dashboard Geral',
        // Icon: BarChartIcon,
        access: 'default',
        disabled: false,
      },
    ],
  },
  {
    ident: 'tables',
    link: '/tables',
    name: 'Tabelas',
    Icon: TableChartIcon,
    access: 'default',
    disabled: false,
  },
  {
    ident: 'objects',
    link: '/objects',
    name: 'Objetos',
    Icon: WatchIcon,
    access: 'default',
    disabled: false,
  },
  {
    ident: 'process',
    // link: '/process',
    name: 'Processos',
    Icon: GraphicEqIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'process:cloning',
        // link: '/process',
        name: 'Clonagens',
        // Icon: GraphicEqIcon,
        access: 'default',
        disabled: false,
        items: [
          {
            ident: 'process:clpostgres',
            link: '/process/clone-postgres',
            name: 'Clones PostgreSQL',
            // Icon: GraphicEqIcon,
            access: 'default',
            disabled: false,
          },
          {
            ident: 'process:cloracle',
            link: '/process/clone-oracle',
            name: 'Clones Oracle',
            // Icon: GraphicEqIcon,
            access: 'default',
            disabled: true,
          },
        ],
      },
      {
        ident: 'process:dumpora',
        link: '/process/dumps-ora',
        name: 'Dumps Oracle',
        // Icon: GraphicEqIcon,
        access: 'default',
        disabled: true,
      },
    ],
  },
  {
    ident: 'teams',
    // link: '/teams',
    name: 'Equipes',
    Icon: GroupIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'teams:abscal',
        link: '/teams/absent-calendar',
        name: 'Calendário de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: false,
      },
      {
        ident: 'teams:absres',
        link: '/teams/absent-resume',
        name: 'Resumo de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: false,
      },
      {
        ident: 'teams:absadm',
        link: '/teams/absent-admin',
        name: 'Admin. de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: true,
      },
    ],
  },
  {
    ident: 'admin',
    link: '/admin',
    name: 'Administração',
    Icon: BusinessCenterIcon,
    access: 'admin',
    disabled: true,
  },
];
