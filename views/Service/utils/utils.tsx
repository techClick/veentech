import React from 'react';
import angular from 'assets/angular.png';
import react from 'assets/react.png';
import apple from 'assets/apple.png';
import android from 'assets/android.png';
import windows from 'assets/windows.png';
import node from 'assets/node.png';
import Contacts from '../Contacts/Contacts';

export const services = [{
  name: 'automation',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'automation',
  contact: <Contacts msg={`
    If you would like more information about our automation skills, you can message us
    or call us.
  `}
  />,
}];
