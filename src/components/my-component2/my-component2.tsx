import { format } from '@myUtils';
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-component2',
  shadow: true
})
export class MyComponent2 {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Gday! This is {this.getText()}</div>;
  }
}
