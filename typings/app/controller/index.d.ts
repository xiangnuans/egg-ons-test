// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportPublish = require('../../../app/controller/publish');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    publish: ExportPublish;
  }
}
