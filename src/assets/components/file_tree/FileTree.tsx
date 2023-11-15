/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "Luka",
          children: [
            {
              name: "node_modules",
            },
            {
              name: "package.json",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "package.json",
    },
  ],
};

type TEntry = {
  name: string;
  children: TEntry[];
};

const Entry = ({ entry, depth }: { entry: TEntry; depth: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ cursor: "pointer" }}>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {entry.children && (isExpanded ? "- " : "+ ")}
        {entry.name}
      </button>

      {entry.children?.map((entry, i) => (
        <div key={i} style={{ paddingLeft: `${depth * 10}px` }}>
          {isExpanded && <Entry entry={entry} depth={depth + 1} />}
        </div>
      ))}
    </div>
  );
};

const FileTree = () => {
  return (
    <div style={{ margin: "200px", textAlign: "left" }}>
      {files.children.map((entry: any, i) => (
        <Entry key={i} entry={entry} depth={1} />
      ))}
    </div>
  );
};

export default FileTree;
