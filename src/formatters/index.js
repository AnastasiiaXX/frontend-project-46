import doStylish from './stylish.js';
import doPlain from './plain.js';

export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return doStylish(tree);
    case 'plain':
      return doPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error('choose a format');
  }
};
