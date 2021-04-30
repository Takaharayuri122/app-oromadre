module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs',
      },
    ],
  }),
    plop.setGenerator('page', {
      description: 'Create a Page',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          // Raw text input
          type: 'input',
          // Variable name for this input
          name: 'name',
          // Prompt to display on command line
          message: 'What is your screen name?'
        },
      ],
      actions: [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: 'src/pages/{{pascalCase name}}.tsx',
          // Handlebars template used to generate content of new file
          templateFile: 'plop-templates/Page.js.hbs',
        },
      ],
    })



};