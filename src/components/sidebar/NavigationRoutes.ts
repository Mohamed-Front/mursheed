export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },

    {
      name: 'statistics',
      displayName: 'menu.users_management',
      meta: {
        icon: 'vuestic-iconset-user',
      },
      disabled: true,
      children: [
        {
          name: 'users',
          displayName: 'Users',
        },
        {
          name: 'roles',
          displayName: 'Roles',
        },
        {
          name: 'Permissions',
          displayName: 'Permissions',
        },
      ],
    },

    {
      name: 'statistics',
      displayName: 'Clients',
      meta: {
        icon: 'vuestic-iconset-user',
      },
      disabled: true,
      children: [
        {
          name: 'guides',
          displayName: 'Guides',
        },
        {
          name: 'drivers',
          displayName: 'Drivers',
        },
        {
          name: 'tourist',
          displayName: 'Tourist',
        },
      ],
    },
    {
      name: 'tourism-management',
      displayName: 'menu.tourism_management',
      meta: {
        icon: 'hotel',
      },

      children: [
        {
          name: 'accommodition',
          displayName: 'Accommodations',
        },

        // {
        //   name: 'category',
        //   displayName: 'accommodations category',
        // },
        {
          name: 'flight',
          displayName: 'menu.flight',
        },
        {
          name: 'offer',
          displayName: 'Offers',
        },
        {
          name: 'Attract',
          displayName: 'Attractive Locations',
        },
      ],
    },

    {
      name: 'settings',
      displayName: 'Settings',
      meta: {
        icon: 'settings',
      },

      children: [
        {
          name: 'pages',
          displayName: 'Pages',
        },
        {
          name: 'terms',
          displayName: 'Terms and Conditions',
        },
        {
          name: 'contact',
          displayName: 'Contact',
        },
        {
          name: 'banner',
          displayName: 'Banners',
        },
        {
          name: 'Country',
          displayName: 'Country prices',
        },
        {
          name: 'reminder',
          displayName: 'Reminder',
        },
      ],
    },

    {
      name: 'order list',
      displayName: 'Orders list',
      meta: {
        icon: 'eye',
      },

      children: [
        {
          name: 'order',
          displayName: 'Orders list',
        },
        {
          name: 'accommodition-order',
          displayName: 'Accommodations order',
        },
      ],
    },
    {
      name: 'reports',
      displayName: 'Reports',
      meta: {
        icon: 'mail',
      },

      children: [
        {
          name: 'payment',
          displayName: 'Payment Reports',
        },
        {
          name: 'earn',
          displayName: 'Earning report',
        },
      ],
    },
    {
      name: 'customer support',
      displayName: 'Customer support',
      meta: {
        icon: 'support',
      },

      children: [
        {
          name: 'chate',
          displayName: 'Chat',
        },
        {
          name: 'ticket',
          displayName: 'Support Tickets',
        },
      ],
    },
  ] as INavigationRoute[],
}
