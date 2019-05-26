const path = require(`path`);
// const crypto = require(`crypto`);

// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//   // Query for nodes to use in creating pages.
//   resolve(
//     graphql(request).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }
      
//       return result;
//     })
//   )
// }); 

// const digest = data => {
//   return crypto
//     .createHash(`md5`)
//     .update(JSON.stringify(data))
//     .digest(`hex`);
// };

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNode } = actions;
//   if (node.internal.type === "StrapiSection") {
//     createNode({
//       ...node,
//       id: node.id + "-markdown",
//       parent: node.id,
//       children: [],
//       internal: {
//         type: "Section",
//         mediaType: "text/markdown",
//         content: node.articles.body,
//         contentDigest: digest(node)
//       }
//     });
//   }
// };


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


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const getArticles = makeRequest(graphql, `
//   {
//     allSection {
//       edges {
//         node {
//           articles {
//             slug
//           }
//         }
//       }
//     }
//   }
//   `).then(result => {
//   // Create pages for each article.
//   console.log(result.data.allStrapiSection)
//   result.data.allSection.edges.node.articles.forEach(({ article }) => {
//     createPage({
//       path: `/${article.slug}`,
//       component: path.resolve(`src/components/ArticleDetail.js`),
//       context: {
//         id: article.slug,
//       },
//     })
//   })
// });

// Query for articles nodes to use in creating pages.
// return getArticles;
// };