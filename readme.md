# tspad

This is an interactive coding environment in the browser. You can write Typescript, see it executed, and write comprehensive documentation using markdown.

- Click any text cell (**including this one**) to edit it
- You can import variables or components from other cells. The editor will even give you a suggestion for quick fix if it finds a symbol that exists in another cell.
- Editor provides autocomplete, type hints, and red squiggles on errors.
- You can show any React component, string, number, JSON object or anything else by calling the `show` function. This is a function built into this environment. Call show multiple times to show multiple values
- Re-order or delete cells using the buttons on the top right
- Add new cells by hovering on the divider between each cell
- Click on the yellow format button to format the code in the editor

All of your changes get saved to the file you opened tspad with. So if you ran `npx tspad serve test.json`, all of the text and code you write will be saved to the `test.json` file.
When running `npx tspad serve` the default file name is notebook.json
