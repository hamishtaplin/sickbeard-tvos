import ATV from 'atvjs';

import sb from 'lib/sickbeard';
import template from './template.hbs';

let Page = ATV.Page.create({
  name: 'show',
  template: template,
  ready(options, resolve, reject) {
		const {tvdbid} = options;
    ATV
      .Ajax
      .get(sb('show', { tvdbid: tvdbid }))
      .then((xhr) => {
        let response = xhr.response;
        response.data.tvdbid = tvdbid;
        resolve(response.data);
      }, (xhr) => {
        let response = xhr.response;
        reject({
          status: xhr.status,
          message: response.message
        });
      });
  }
});

export default Page;
