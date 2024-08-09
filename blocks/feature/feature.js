import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
  const aempublishurl = 'https://publish-p115476-e1135027.adobeaemcloud.com';
  const aemauthorurl = 'https://author-p115476-e1135027.adobeaemcloud.com';
  const commerceurl = 'https://com421.adobedemo.com/graphql';
  const persistedquery = '/graphql/execute.json/securbank/ProductByPath';

  const mediaWrapper = document.createElement('div');
  mediaWrapper.classList.add('feature-content-media');
  const picture = block.querySelector('picture');
  mediaWrapper.append(picture);

  const productWrapper = block.lastElementChild;

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('feature-content-wrapper');
  let row = block.getElementsByTagName('div')[3];
  row.classList.add('feature-content-container');
  contentWrapper.append(mediaWrapper);
  contentWrapper.append(row);

  const callOutWrapper = document.createElement('div');
  callOutWrapper.classList.add('feature-callout-wrapper');
  /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
  row = block.getElementsByTagName('div')[4];

  callOutWrapper.append(row);

  block.textContent = '';
  block.append(contentWrapper);
  block.append(callOutWrapper);
}
