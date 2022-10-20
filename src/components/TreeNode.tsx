import React, { useState } from "react";
import DataNode from "../DataNode.type";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { AiFillCaretRight } from "react-icons/ai";

interface TreeNodeProps {
  nodeData: DataNode;
  depth: number;
}

const TreeNode = ({ nodeData, depth }: TreeNodeProps): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const isDir = nodeData.child || false;

  const handleClickNode = () => {
    if (isDir) {
      toggleOpen();
    } else {
      alert(`This file path is ${nodeData.path}`);
    }
  };

  const toggleOpen = () => setOpen((prev) => !prev);
  return (
    <>
      <TreeNodeDiv depth={depth} onClick={handleClickNode}>
        <TreeNodeName>{nodeData.name}</TreeNodeName>
        {isDir && (
          <motion.div
            animate={{
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            <AiFillCaretRight />
          </motion.div>
        )}
      </TreeNodeDiv>
      <ChildDiv
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
      >
        {nodeData.child &&
          nodeData.child.map((data) => (
            <TreeNode key={data.path} nodeData={data} depth={depth + 1} />
          ))}
      </ChildDiv>
    </>
  );
};

interface TreeNodeDivProps {
  depth: number;
}

const TreeNodeDiv = styled.div<TreeNodeDivProps>`
  color: #999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.25rem 0.25rem ${(props) => props.depth}rem;

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const TreeNodeName = styled.p`
  color: inherit;
  margin: 0;
`;

const ChildDiv = styled(motion.div)`
  overflow: hidden;
`;

TreeNode.defaultProps = {
  nodeData: undefined,
  depth: 0,
};

export default TreeNode;
