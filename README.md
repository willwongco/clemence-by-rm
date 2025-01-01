
## Common local development commands

1. Before beginning any work, it is good practice to pull down the latest changes from the repository:
   `git pull`

2. Anytime you add a Tailwind CSS class (remember to prefix it with twcss-), run the CLI tool to scan your template files for classes and build your CSS to assets/app.css:
   `npx tailwindcss -i ./assets/tailwind-input.css -o ./assets/tailwind.css --watch`

- Run this command in a separate terminal, so it will continue to run while you are developing.
- Note that using a Tailwind CSS class without a space afterward when followed by a liquid tag causes compiling issues:
`lg:!tpx-[32px]{% endif %}'>`
But this does work:
`lg:!tpx-[32px] {% endif %}'>`

3. Launch the local development server:
   `shopify theme dev`
