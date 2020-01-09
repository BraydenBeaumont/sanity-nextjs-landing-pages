export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e17a154823ea281b27de8b9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ga3ipq4f',
                  apiId: '38d8980c-dac2-45d5-9beb-4eac93278781'
                },
                {
                  buildHookId: '5e17a154df759d01fc725746',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tvyy15jf',
                  apiId: '8382a876-1d0e-497e-82c4-b49991a6e0b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BraydenBeaumont/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tvyy15jf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
