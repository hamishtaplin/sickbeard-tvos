import ATV from 'atvjs';
import template from './template.hbs';
import relatedContentTpl from './relatedContent.hbs';
import sb from 'lib/sickbeard';

let doc, data, relatedContent;

let Page = ATV.Page.create({
  name: 'shows',
  url: sb('shows'),
  template: template,
  events: {
    select(e) {
      const id = e.target.getAttribute('id');
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
