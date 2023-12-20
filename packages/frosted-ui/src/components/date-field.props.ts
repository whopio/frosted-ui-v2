import { PropDef, colorProp } from '../helpers';

const sizes = ['1', '2', '3'] as const;

const dateFieldPropDefs = {
  size: { type: 'enum', values: sizes, default: '2', responsive: true },
  color: colorProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorProp;
};

export { dateFieldPropDefs };
