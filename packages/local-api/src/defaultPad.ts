const defaultPad = [
  {
    id: "khfEFOIhD86RNmp358APT",
    type: "text",
    content:
      "# tspad\n\nThis is an interactive coding environment. You can write Typescript, see it executed, and write comprehensive documentation using markdown.\n\n- Click any text cell (**including this one**) to edit it\n- You can import variables or components from other cells. The editor will even give you a suggestion for quick fix if it finds a symbol that exists in another cell.\n- Editor provides autocomplete, type hints, and red squiggles on errors.\n- You can show any React component, string, number, JSON object or anything else by calling the `show` function. This is a function built into this environment. Call show multiple times to show multiple values\n- Re-order or delete cells using the buttons on the top right\n- Add new cells by hovering on the divider between each cell\n- Click on the yellow format button to format the code in the editor\n \nAll of your changes get saved to the file you opened tspad with. So if you ran `npx tspad serve test.json`, all of the text and code you write will be saved to the `test.json` file.\nWhen running `npx tspad serve` the default file name is notebook.json",
  },
  {
    id: "PC9cjHfr955IFTxVurs4h",
    type: "code",
    content:
      "import { useState } from 'react';\r\nconst Counter = () => {\r\n  const [count, setCount] = useState<number>(0);\r\n  return (\r\n    <div>\r\n      <button onClick={() => setCount(count + 1)}>Click</button>\r\n      <h3>Count: {count}</h3>\r\n    </div>\r\n  );\r\n};\r\n\r\nshow(<Counter />)",
  },
  {
    id: "EcA7V7WeVuNGho4tScE2_",
    type: "code",
    content:
      'import { Counter } from "./cell1";\n\nconst App = () => {               \n  return (\n    <div>\n      <h3>App Says Hi!</h3>\n      <i>Counter component will be rendered below...</i>\n      <hr />\n      {/* \n        Counter was declared in an earlier cell - \n        we can reference it here! \n      */}\n      <Counter />\n    </div>\n  );\n};\n\nshow(<App />);',
  },
];

export default defaultPad;
