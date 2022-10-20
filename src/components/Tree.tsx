import React from "react";
import TreeNode from "./TreeNode";
import data from "../data";
import styled from "@emotion/styled";

const Tree = (): React.ReactElement => {
  return (
    <TreeDiv>
      <TreeNode nodeData={data} />
    </TreeDiv>
  );
};

const TreeDiv = styled.div`
  width: 300px;
  height: 100vh;
  padding: 1rem;
  overflow: auto;
  background-color: #efefef;
`;

export default Tree;
