// clients section
import envato from 'common/assets/image/saasAppCreative/logos/envato.png';
import evernote from 'common/assets/image/saasAppCreative/logos/evernote.png';
import forbes from 'common/assets/image/saasAppCreative/logos/forbes.png';
import geekwire from 'common/assets/image/saasAppCreative/logos/geekwire.png';
import slack from 'common/assets/image/saasAppCreative/logos/slack.png';
import usaToday from 'common/assets/image/saasAppCreative/logos/usa-today.png';
// how it works section
import icon1 from 'common/assets/image/saasAppCreative/icons/1.png';
import icon2 from 'common/assets/image/saasAppCreative/icons/2.png';
import icon3 from 'common/assets/image/saasAppCreative/icons/3.png';
import icon4 from 'common/assets/image/saasAppCreative/icons/4.png';
// portfolio section
import portfolio1 from 'common/assets/image/saasAppCreative/portfolio1.png';
import portfolio2 from 'common/assets/image/saasAppCreative/portfolio2.png';
// features section
import fIcon1 from 'common/assets/image/saasAppCreative/icons/feature1.png';
import fIcon2 from 'common/assets/image/saasAppCreative/icons/feature2.png';
import fIcon3 from 'common/assets/image/saasAppCreative/icons/feature3.png';
import fIcon4 from 'common/assets/image/saasAppCreative/icons/feature4.png';
import fIcon5 from 'common/assets/image/saasAppCreative/icons/feature5.png';
import fIcon6 from 'common/assets/image/saasAppCreative/icons/feature6.png';
// blog/news feed section
import post1 from 'common/assets/image/saasAppCreative/blog1.png';
import post2 from 'common/assets/image/saasAppCreative/blog2.png';
import post3 from 'common/assets/image/saasAppCreative/blog3.png';
// footer
import logo from 'common/assets/image/saasAppCreative/logo.svg';

export const menu_items = [
  {
    label: 'Home',
    path: '#home',
    offset: '70',
  },
  {
    label: 'How to',
    path: '#how-to',
    offset: '70',
  },
  {
    label: 'Features',
    path: '#features',
    offset: '70',
  },
  {
    label: 'Portfolio',
    path: '#portfolio',
    offset: '70',
  },
  {
    label: 'Newsfeed',
    path: '#newsfeed',
    offset: '70',
  },
];

export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];

export const howTos = [
  {
    id: 1,
    icon: icon1,
    title: 'Manage Smartly',
    text: `Stay on top of your task lists and stay in touch with what's happening`,
    linkLabel: 'Learn More',
    link: '#',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Monitor user Analytics',
    text: `Stay on top of your task lists and stay in touch with what's happening`,
    linkLabel: 'Learn More',
    link: '#',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Safe & Trusted',
    text: `Get the best DoorDash experience with live order tracking.`,
    linkLabel: 'Learn More',
    link: '#',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Fast Customer Support',
    text: `Get the best DoorDash experience with live order tracking.`,
    linkLabel: 'Learn More',
    link: '#',
  },
];

export const portfolios = [
  {
    id: 1,
    bgColor: '#E8FFD6',
    title: 'Dashboard Development',
    description: `Create professional ads, branded content, and stunning stories in minutes. Now available on desktop and mobile.`,
    media: portfolio1,
  },
  {
    id: 2,
    bgColor: '#F0F9FE',
    title: 'Database Control system',
    description: `Create professional ads, branded content, and stunning stories in minutes. Now available on desktop and mobile.`,
    media: portfolio2,
  },
];

export const features = [
  {
    id: 1,
    icon: fIcon1,
    title: '3D modeling & art',
    content: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 2,
    icon: fIcon2,
    title: 'Digital promotion',
    content: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 3,
    icon: fIcon3,
    title: 'Business Enterprise',
    content: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 4,
    icon: fIcon4,
    title: 'Marketing & advertising',
    content: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 5,
    icon: fIcon5,
    title: 'Ultimate development',
    content: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 6,
    icon: fIcon6,
    title: 'Online support',
    content: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
];

export const posts = [
  {
    id: 1,
    date: 'June 3, 2020',
    image: post1,
    title: 'The three Fundamental Rules to Keep Your Website Goal Orientated',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 2,
    date: 'Dec 8, 2020',
    image: post2,
    title: 'Five Common Mistakes Teams Make When Tracking Performance',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 3,
    date: 'Dec 8, 2020',
    image: post3,
    title: `Why You Might Want to Reconsider with Tracking First Meaningful Paint`,
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
];

export const footer = {
  about: {
    logo: logo,
    text: `We run Advanced Search reports on the criteria you care about to see how work is progressing and where to focus.`,
  },
  widgets: [
    {
      id: 2,
      title: 'About Us',
      list: [
        {
          id: 1,
          title: 'Support Center',
          link: '#',
        },
        {
          id: 2,
          title: 'Customer Support',
          link: '#',
        },
        {
          id: 3,
          title: 'About Us',
          link: '#',
        },
        {
          id: 4,
          title: 'Copyright',
          link: '#',
        },
        {
          id: 5,
          title: 'Popular Campaign',
          link: '#',
        },
      ],
    },
    {
      id: 3,
      title: 'Our Information',
      list: [
        {
          id: 1,
          title: 'Return Policy ',
          link: '#',
        },
        {
          id: 2,
          title: 'Privacy Policy',
          link: '#',
        },
        {
          id: 3,
          title: 'Terms & Conditions',
          link: '#',
        },
        {
          id: 4,
          title: 'Site Map',
          link: '#',
        },
        {
          id: 5,
          title: 'Store Hours',
          link: '#',
        },
      ],
    },
    {
      id: 4,
      title: 'My Account',
      list: [
        {
          id: 1,
          title: 'Press inquiries',
          link: '#',
        },
        {
          id: 2,
          title: 'Social media ',
          link: '#',
        },
        {
          id: 3,
          title: 'directories',
          link: '#',
        },
        {
          id: 4,
          title: 'Images & B-roll',
          link: '#',
        },
        {
          id: 5,
          title: 'Permissions',
          link: '#',
        },
      ],
    },
  ],
  contactInfo: {
    title: 'Contact info',
    address: `Mohakhali DOHS, Amsterdam, Netherlands`,
    phone: `+31 62 19 22 705`,
    openingTime: `7 Days - 8am - 10pm`,
    email: `info@redqteam.com`,
  },
};
