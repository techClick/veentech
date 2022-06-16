import React from 'react';
import angular from 'assets/angular.png';
import react from 'assets/react.png';
import apple from 'assets/apple.png';
import android from 'assets/android.png';
import windows from 'assets/windows.png';
import node from 'assets/node.png';
import { faEnvelope, faEye, faGlobe, faMobileScreen, faRobot, faServer } from '@fortawesome/free-solid-svg-icons';
import Contacts from '../Contacts/Contacts';

export const services = [{
  name: 'Automation',
  contact: <Contacts msg={`If you would like more information about our automation skills, you can message us
    or call us.`}
  />,
  description: `Acquire hardware or software that is tailored to your business needs.
    Simplify business processes with custom devices or software.`,
  icon: faRobot,
  path: '/services/automation',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'automation',
}, {
  name: 'Business Website',
  contact: <Contacts msg={`If you would like more information about our Web Development skills, you can message us
    or call us.`}
  />,
  description: `Acquire an online application that showcases your business,
    builds consumer base and gathers feedback.`,
  icon: faGlobe,
  path: '/services/website',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'a business website',
}, {
  name: 'Custom Mobile App',
  contact: <Contacts msg={`If you would like more information about our Mobile App Development skills, you can message us
    or call us.`}
  />,
  description: `Acquire a mobile application that is tailored to your business processes.
    Be ever close to your consumers and effiecient in your operations.`,
  icon: faMobileScreen,
  path: '/services/mobileapp',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'a custom mobile app',
}, {
  name: 'Database Management',
  contact: <Contacts msg={`If you would like more information about our Database Management and
    Administration skills, you can message us or call us.`}
  />,
  description: `Acquire a repository for your data and information. Access to this database
    can be granted to your clients or employees.`,
  icon: faServer,
  path: '/services/dba',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'our database management',
}, {
  name: 'Data Analytics',
  contact: <Contacts msg={`If you would like more information about our Data Analysis skills, you can message us
    or call us.`}
  />,
  description: `Utlizie software tools like Python, Excel and Power BI to
    visualize data and analyze your business.`,
  icon: faEnvelope,
  path: '/services/analytics',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'our data analytics',
}, {
  name: 'Digital Marketing',
  contact: <Contacts msg={`If you would like more information about our Digital Marketing service, you can message us
    or call us.`}
  />,
  description: `Take advantage of tools like Google Adwords, Facebook and YouTube Display Ads
    and grow your consumer base.`,
  icon: faEye,
  path: '/services/marketing',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'our digital marketing service',
}, {
  name: 'Video Advertising',
  contact: <Contacts msg={`If you would like more information about our Video Advertising skills, you can message us
    or call us.`}
  />,
  description: `Take advantage of tools like iMovie and Final Cut Pro.
    Create attractive and informative videos that grow your consumer base via YouTube.`,
  icon: faEnvelope,
  path: '/services/videoads',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'our video advertising',
}, {
  name: 'Business Email',
  contact: <Contacts msg={`If you would like more information about setting up a Business Email, you can message us
    or call us.`}
  />,
  description: `Standout and have a private and personalized company email address,
    which will be used by you and your employees.`,
  icon: faEnvelope,
  path: '/services/email',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'a business email',
}];
