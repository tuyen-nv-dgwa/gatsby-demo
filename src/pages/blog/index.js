import React from "react";
import { Link, graphql } from 'gatsby'
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle={"My Blog posts"}>
      {/* <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul> */}
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>excerpt: {node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
};

//2 truy vấn ở bên ngoài khối Blogpage và truyền dữ liệu thông qua data props
// export const query = graphql`
//   query {
//     allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `
// sắp xếp giảm dần date, định dạng day MMMM D, YYYY ; excerpt: trích xuất ra nội dung 
export const query1 = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
