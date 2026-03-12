import {
  TableCellsIcon,
  UserGroupIcon,
  CalculatorIcon,
} from '@heroicons/vue/24/outline'

export const headerNavigation = [
  {
    name: 'Main Table',
    routeName: 'MainTable',
    icon: TableCellsIcon,
  },
  {
    name: 'Debtors',
    routeName: 'Debtors',
    icon: UserGroupIcon,
  },
  {
    name: 'Calculations',
    routeName: 'Calculations',
    icon: CalculatorIcon,
  },
]

export const footerNav = [
  {
    title: 'Product',
    links: [
      { name: 'How it works', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Support', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'Reddit', href: '#' },
    ],
  },
]

