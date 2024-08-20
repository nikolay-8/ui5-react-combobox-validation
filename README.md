## Getting Started

First, install the node_modules:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Reproducing validation issue with ComboBox component of "UI5 Components for React" package

After following the steps in the "Getting Started" section and starting the app at [http://localhost:3000](http://localhost:3000) follow these steps:

1. Refresh the page

2. Click on the "Submit" button - we see validation errors below all three fields

3. Type in some text in the "Text Box" field

4. Select an option in the "Select" field

5. Select an option in the "Combo Box" field

6. Click the submit button

Expected behavior: to have no validation errors at this point and see a popup with text "Submit with no validation errors".

Actual behavior: we see that there is still a validation error for the "Combo Box" field even though there is a selected item in it.
