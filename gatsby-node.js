const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      projects: allContentfulProjects {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `);
  data.projects.edges.forEach(({ node }) => {
    actions.createPage({
      path: `projects/${node.slug}`,
      component: path.resolve('./src/template/project-template.js'),
      context: { name: node.name, slug: node.slug },
    });
  });
};
