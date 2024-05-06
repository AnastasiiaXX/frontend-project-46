import _ from 'lodash';

const makeIndent = (depth) => {
  const replacer = ' ';
  const indentSize = 4;
  return replacer.repeat(depth * indentSize - 2);
};

const stringify = (value, depth = 1) => {
  if (!_.isObject(value)) {
    return `${(value)}`;
  }
  const keys = Object.keys(value);
  const result = keys.map((key) => `${makeIndent(depth + 1)}  ${key}: ${stringify(value[key], depth + 1)}`);
  return `{\n${result.join('\n')}\n  ${makeIndent(depth)}}`;
};

const doStylish = (diff) => {
  const iter = (tree, depth = 1) => {
    const result = tree.flatMap((node) => {
      const {
        key, type, oldValue, newValue, children,
      } = node;
      switch (type) {
        case 'nested':
          return `${makeIndent(depth)}  ${key}: {\n${iter(children, depth + 1)}\n${makeIndent(depth)}  }`;
        case 'added':
          return `${makeIndent(depth)}+ ${key}: ${stringify(newValue, depth)}`;
        case 'deleted':
          return `${makeIndent(depth)}- ${key}: ${stringify(oldValue, depth)}`;
        case 'updated':
          return [
            `${makeIndent(depth)}- ${key}: ${stringify(oldValue, depth)}`,
            `${makeIndent(depth)}+ ${key}: ${stringify(newValue, depth)}`,
          ];
        default:
          return `${makeIndent(depth)}  ${key}: ${stringify(oldValue, depth)}`;
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(diff)}\n}`;
};

export default doStylish;
