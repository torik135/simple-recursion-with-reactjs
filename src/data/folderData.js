const folderData = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'node_modules',
      isFolder: true,
      items: [
        {
          name: 'react',
          isFolder: true,
          items: [
            {
              name: 'index.js',
              isFolder: false,
            },
          ],
        },
        {
          name: 'react-dom',
          isFolder: true,
          items: [
            {
              name: 'index.js',
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: 'public',
      isFolder: true,
      items: [
        { name: 'favicon.ico', isFolder: false },
        { name: 'index.html', isFolder: false },
        { name: 'logo192.png', isFolder: false },
        { name: 'logo512.png', isFolder: false },
        { name: 'manifest.json', isFolder: false },
        { name: 'robots.txt', isFolder: false },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'components',
          isFolder: true,
          items: [
            {
              name: 'Folder',
              isFolder: true,
              items: [
                { name: 'Folder.jsx', isFolder: false },
                { name: 'index.js', isFolder: false },
                { name: 'Folder.scss', isFolder: false },
              ],
            },
            { name: 'index.js', isFolder: false }
          ],
        },
        {
          name: 'data',
          isFolder: true,
          items: [{ name: 'folderData.js', isFolder: false }],
        },
        { name: 'App.css', isFolder: false },
        { name: 'App.jsx', isFolder: false },
        { name: 'index.css', isFolder: false },
        { name: 'index.jsx', isFolder: false },
      ],
    },
    { name: '.gitignore', isFolder: false },
    { name: '.prettierrc', isFolder: false },
    { name: 'package-lock.json', isFolder: false },
    { name: 'package.json', isFolder: false },
    { name: 'README.md', isFolder: false },
  ],
};

export { folderData };
