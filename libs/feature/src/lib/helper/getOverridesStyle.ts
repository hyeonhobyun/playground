import { get } from 'lodash';
import { StyleObject } from 'styletron-react';
import { StyleOverride } from '@playground/component/component.types';

export interface OverridesProps<Props> {
  Root?: {
    style?: StyleOverride<Props>;
  };
}

export const getOverrideStyle = <T>(overrides?: OverridesProps<T>) =>
  get(overrides, 'Root.style', {}) as StyleObject;
