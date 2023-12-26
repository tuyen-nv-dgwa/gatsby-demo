import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle={"My Blog posts"}>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  );
};

//2 truy vấn ở bên ngoài khối Blogpage và truyền dữ liệu thông qua data props
export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
