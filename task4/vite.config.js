export default {
    root: './src',
    name: 'task4',
    outDir: 'dist',
    base: '/',
    server: {
      port: 3007,
      open: false,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      lib: false
    },
  };
  