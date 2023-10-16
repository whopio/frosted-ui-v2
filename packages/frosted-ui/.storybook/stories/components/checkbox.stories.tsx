import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Box, Code, Flex, Grid, Text } from '../../../src/components';
import { Checkbox } from '../../../src/components/checkbox';
import { checkboxPropDefs } from '../../../src/components/checkbox.props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: checkboxPropDefs.size.default,
    color: checkboxPropDefs.color.default,
    highContrast: checkboxPropDefs.highContrast.default,
  },
  render: (args) => (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox defaultChecked {...args} /> Agree to Terms and Conditions
      </Flex>
    </Text>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Flex gap="2">
      <Checkbox defaultChecked {...args} size="1" />
      <Checkbox defaultChecked {...args} size="2" />
      <Checkbox defaultChecked {...args} size="3" />
    </Flex>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <Grid rows="4" gap="2" display="inline-grid" flow="column">
      <Checkbox {...args} variant="surface" checked />
      <Checkbox {...args} variant="surface" checked={false} />
      <Checkbox {...args} variant="surface" disabled />
      <Checkbox {...args} variant="surface" disabled checked />
      <Checkbox {...args} variant="classic" checked />
      <Checkbox {...args} variant="classic" checked={false} />
      <Checkbox {...args} variant="classic" disabled />
      <Checkbox {...args} variant="classic" disabled checked />
      <Checkbox {...args} variant="soft" checked />
      <Checkbox {...args} variant="soft" checked={false} />
      <Checkbox {...args} variant="soft" disabled />
      <Checkbox {...args} variant="soft" disabled checked />
    </Grid>
  ),
};

export const Color: Story = {
  render: (args) => (
    <Flex gap="2">
      <Checkbox {...args} color="indigo" defaultChecked />
      <Checkbox {...args} color="cyan" defaultChecked />
      <Checkbox {...args} color="orange" defaultChecked />
      <Checkbox {...args} color="crimson" defaultChecked />
    </Flex>
  ),
};

export const HighContrast: Story = {
  name: 'High Contrast',
  render: (args) => (
    <Grid rows="2" gap="2" display="inline-grid" flow="column">
      <Checkbox {...args} color="indigo" defaultChecked />
      <Checkbox {...args} color="indigo" defaultChecked highContrast />
      <Checkbox {...args} color="cyan" defaultChecked />
      <Checkbox {...args} color="cyan" defaultChecked highContrast />
      <Checkbox {...args} color="orange" defaultChecked />
      <Checkbox {...args} color="orange" defaultChecked highContrast />
      <Checkbox {...args} color="crimson" defaultChecked />
      <Checkbox {...args} color="crimson" defaultChecked highContrast />
    </Grid>
  ),
};

export const Alignment: Story = {
  name: 'Alignment with text',
  render: (args) => (
    <Flex direction="column" gap="3">
      <Text mb="3">
        Composing <Code>Checkbox</Code> within <Code>Text</Code> automatically
        centers it with the first line of text.
      </Text>
      <Text as="label" size="2">
        <Flex gap="2">
          <Checkbox {...args} size="1" defaultChecked /> Agree to Terms and
          Conditions
        </Flex>
      </Text>

      <Text as="label" size="3">
        <Flex gap="2">
          <Checkbox {...args} size="2" defaultChecked /> Agree to Terms and
          Conditions
        </Flex>
      </Text>

      <Text as="label" size="4">
        <Flex gap="2">
          <Checkbox {...args} size="3" defaultChecked /> Agree to Terms and
          Conditions
        </Flex>
      </Text>

      <Box style={{ maxWidth: 300 }}>
        <Text as="label" size="4">
          <Flex gap="2">
            <Checkbox defaultChecked /> It is automatically well-aligned with
            multi-line text too.
          </Flex>
        </Text>
      </Box>
    </Flex>
  ),
};
