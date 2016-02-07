import ATV from 'atvjs';

import template from './template.hbs';

let Page = ATV.Page.create({
  name: 'show',
  template: template,
  ready(options, resolve, reject) {
		const {tvdbid} = options;
    ATV
      .Ajax
      .get('http://192.168.0.7:8081/api/22d311226b93024c0369305a415f904f/?cmd=show&tvdbid=' + tvdbid)
      .then((xhr) => {
        let response = xhr.response;
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
