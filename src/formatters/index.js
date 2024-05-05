import doStylish from './stylish.js';

export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return doStylish(tree);
    default:
      throw new Error('choose a format');
  }
};
