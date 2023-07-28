const date = new Date();

const config = {
  npmRepository: 'http://',
  npmName: 'mcb-portal-sdk',
  npmVersion: `0.2.${(date / 1000) | 0}`,
  supportsES6: false,
  targetPath: './codegen/npmPackage',
  services: [
    {
      specPath: './reference/merge-service.yaml',
    },
  ],
  npmRegistry: 'http://mcb.ru/repository/npm-local/',
};

module.exports = config;