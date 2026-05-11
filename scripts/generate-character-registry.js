const fs = require('fs');
const path = require('path');

const charactersDir = path.join(__dirname, '../src/app/data/characters');
const registryPath = path.join(charactersDir, 'registry.ts');

const files = fs
  .readdirSync(charactersDir)
  .filter(
    (file) =>
      file.endsWith('.data.ts') &&
      file !== 'registry.ts'
  );

const imports = [];
const entries = [];

files.forEach((file, index) => {
  const importName = `character${index}`;
  const fileName = file.replace('.ts', '');

  imports.push(
    `import ${importName} from './${fileName}';`
  );

  entries.push(importName);
});

const content = `
${imports.join('\n')}

export const ALL_CHARACTER_PAGES = [
  ${entries.join(',\n  ')}
];

export const ALL_CHARACTERS =
  ALL_CHARACTER_PAGES.map(page => page.character);
`;

fs.writeFileSync(registryPath, content);

console.log('✅ registry.ts gerado com sucesso!');