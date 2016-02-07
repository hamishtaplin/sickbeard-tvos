import ATV from 'atvjs';
import template from './template.hbs';
import relatedContentTpl from './relatedContent.hbs';

const APIURL = 'http://192.168.0.7:8081/api/22d311226b93024c0369305a415f904f/?cmd=shows';
let doc, data, relatedContent;

let Page = ATV.Page.create({
  name: 'shows',
  url: APIURL,
  template: template,
  events: {
    select(e) {
      const id = e.target.getAttribute('id');
      console.log(data[id]);
      ATV.Navigation.navigate('show', data[id]);
    },
    highlight(e) {
      const id = e.target.getAttribute('id');
      relatedContent.innerHTML = relatedContentTpl(data[id]);
    }
  },
  data(d) {
    data = d.data;
    return d;
  },
  afterReady(doc) {
    doc = doc;
    relatedContent = doc.getElementById('relatedContent');
  }
});

export default Page;
