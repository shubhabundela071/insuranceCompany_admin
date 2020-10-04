import {
  RouteInfo
} from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'icon-home-run',
    class: '',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '//users',
    title: 'Customers',
    icon: 'icon-user',
    class: '',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '/logistics',
    title: 'Logistics',
    //<img src="/assets/icon/Group 11147.png" alt="shubha">
    icon: 'icon-delivery',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      {
        path: '//logistics-owner',
        title: 'Owner',
        icon: '',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '//driver',
        title: 'Driver',
        icon: '',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '//orders',
        title: 'Orders',
        icon: '',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '//open-jobs',
        title: 'Open Jobs',
        icon: '',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/commodities',
    title: 'Commodities',
    icon: 'icon-commodity',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      {
        path: '//owner',
        title: 'Owner',
        icon: '',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '//commodities-driver',
        title: 'Driver',
        icon: '',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '//commodities-orders',
        title: 'Orders',
        icon: '',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '//products',
        title: 'Categories & Products',
        icon: '',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: []
      }

    ]
  }
//   {
//     path: '/organiser',
//     title: 'Organisers',
//     icon: 'fa fa-user-circle-o',
//     class: 'has-sub',
//     badge: '',
//     badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//     isExternalLink: false,
//     submenu: [
//       {
//         path: '//venuer',
//         title: 'VenueOwner',
//         icon: 'fa fa-user',
//         class: '',
//         badge: '',
//         badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//         isExternalLink: false,
//         submenu: []
//       },
//        {
//         path: '//host',
//         title: 'Host',
//         icon: 'fa fa-user',
//         class: '',
//         badge: '',
//         badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//         isExternalLink: false,
//         submenu: []
//       },
//        {
//         path: '//promoter',
//         title: 'Promoter',
//         icon: 'fa fa-user',
//         class: '',
//         badge: '',
//         badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//         isExternalLink: false,
//         submenu: []
//       },
//         {
//         path: '//member',
//         title: 'Member',
//         icon: 'fa fa-user',
//         class: '',
//         badge: '',
//         badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//         isExternalLink: false,
//         submenu: []
//       },
//     ]
//  },
// {
//   path: '//event',
//   title: 'Events',
//   icon: 'fa fa-building-o',
//   class: '',
//   badge: '',
//   badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//   isExternalLink: false,
//   submenu: []
// },
//  {
//   path: '//categories',
//   title: 'Categories',
//   icon: 'fa fa-clone',
//   class: '',
//   badge: '',
//   badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//   isExternalLink: false,
//   submenu: []
// }, 
// {
//   path: '//venue',
//   title: 'Venues',
//   icon: 'fa fa-map-marker',
//   class: '',
//   badge: '',
//   badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//   isExternalLink: false,
//   submenu: []
// },
// {
//   path: '/payments',
//   title: 'Payments',
//   icon: 'fa fa-credit-card',
//   class: 'has-sub',
//   badge: '',
//   badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//   isExternalLink: false,
//   submenu: [
//     {
//       path: '//user-payment',
//       title: 'User Payments',
//       icon: '',
//       class: '',
//       badge: '',
//       badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//       isExternalLink: false,
//       submenu: []
//     },
//      {
//       path: '//organiser-payment',
//       title: 'Organiser Payments',
//       icon: '',
//       class: '',
//       badge: '',
//       badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//       isExternalLink: false,
//       submenu: []
//     }]
// },
// {
//     path: '//support',
//     title: 'Support',
//     icon: 'fa fa-comments',
//     class: '',
//     badge: '',
//     badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
//     isExternalLink: false,
//     submenu: []
//   }
];