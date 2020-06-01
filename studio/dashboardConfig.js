export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed4bb8a77d22708413799a1',
                  title: 'Sanity Studio',
                  name: 'dgeeks-portfolio-studio',
                  apiId: '925cad6a-0043-4548-8f29-300e2138d22c'
                },
                {
                  buildHookId: '5ed4bb8ad52d635696ecbc5c',
                  title: 'Portfolio Website',
                  name: 'dgeeks-portfolio',
                  apiId: '081a21d4-2bb8-49a3-aa8b-2a8567aca6cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webpinoy/dgeeks-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://dgeeks-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
