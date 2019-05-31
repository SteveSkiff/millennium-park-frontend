const path = require(`path`);


// Prismic Page Creation from Articles
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const pages = await graphql(`
    {
      allPrismicArticle {
        edges {
          node {
            id
            uid
            data {
              category {
                uid
              }
            }
          }
        }
      }
      allPrismicContentList {
        edges {
          node {
            id
            uid
            data {
              category {
                uid
              }
            }
          }
        }
      }
    }  
  `)

  const articleTemplate = path.resolve('src/pages/ArticleDetail.js');

  const contentListTemplate = path.resolve('src/pages/contentlist.js')

  pages.data.allPrismicArticle.edges.forEach(edge => {
    createPage({
      path: `${edge.node.data.category.uid}/${edge.node.uid}`,
      component: articleTemplate,
      context: {
        uid: edge.node.uid,
      }
    })
  })

  pages.data.allPrismicContentList.edges.forEach(edge => {
    createPage({
      path: `${edge.node.data.category.uid}/${edge.node.uid}`,
      component: contentListTemplate,
      context: {
        uid: edge.node.uid,
      }
    })
  })

};

