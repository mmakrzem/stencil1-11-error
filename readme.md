
# Bug in Stencil v1.10.x and 1.11.x
run the following commands from a Windows command prompt:

```bash
npm install
npm run start
npm run test
npm run start
```

Now you should see the error:

```bash
[ ERROR ]  Component Tag Name "my-component" Must Be Unique
           Please update the components so "my-component" is only used once:
           ./src/components/my-component/my-component.tsx ./dist/collection/components/my-component/my-component.js

[ ERROR ]  Component Tag Name "my-component2" Must Be Unique
           Please update the components so "my-component2" is only used once:
           ./dist/collection/components/my-component2/my-component2.js ./src/components/my-component2/my-component2.tsx
```
