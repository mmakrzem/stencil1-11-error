import { newE2EPage } from '@stencil/core/testing';

describe('my-component2', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component2></my-component2>');
    const element = await page.find('my-component2');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component2></my-component2>');
    const component = await page.find('my-component2');
    const element = await page.find('my-component2 >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
