import _ from 'lodash';

const formatValue = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const doPlain = (diff, parent = '') => {
  const result = diff.flatMap((node) => {
    const key = parent ? `${parent}.${node.key}` : node.key;

    switch (node.type) {
      case 'nested':
        return doPlain(node.children, key);
      case 'added':
        return `Property '${key}' was added with value: ${formatValue(node.newValue)}`;
      case 'deleted':
        return `Property '${key}' was removed`;
      case 'updated':
        return `Property '${key}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
      default:
        return '';
    }
  }).filter(Boolean);

  return result.join('\n');
};

export default doPlain;
