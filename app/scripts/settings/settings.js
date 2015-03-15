'use strict';

angular.module('deckApp.settings', [])
  .constant('settings', {
    feedbackUrl: 'http://hootch.test.netflix.net/submit',
    gateUrl: 'http://spinnaker-api-prestaging.prod.netflix.net',
    pollSchedule: 30000,
    providers: {
      aws: {
        defaults: {
          account: 'test',
          region: 'us-east-1'
        },
        primaryAccounts: ['prod', 'test'],
        primaryRegions: ['eu-west-1','us-east-1','us-west-1','us-west-2'],
        challengeDestructiveActions: ['prod']
      }
    },
    authEnabled: false,
    feature: {
      notifications: false
    }
  });

window.tracking = {
  enabled: false, // set to true to enable GA tracking
  key: 'key goes here',
};
