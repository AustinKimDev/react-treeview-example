import DataNode from "./DataNode.type";

const data: DataNode = {
  name: "ROOT",
  path: "/",
  child: [
    {
      name: "file 1",
      path: "/file_1",
    },
    {
      name: "file 2",
      path: "/file_2",
    },
    {
      name: "file 3",
      path: "/file_3",
    },
    {
      name: "file 4",
      path: "/file_4",
    },
    {
      name: "folder 1",
      path: "/folder_1",
      child: [
        {
          name: "file 1-1",
          path: "/folder_1/file_1_1",
        },
        {
          name: "folder 1-1",
          path: "/folder_1/folder_1_1",
          child: [
            {
              name: "file 1-1-1",
              path: "/folder_1/folder_1_1/file_1_1_1",
            },
          ],
        },
      ],
    },
    {
      name: "folder 2",
      path: "/folder_2",
      child: [
        {
          name: "file 2-1",
          path: "/folder_2/file_2_1",
        },
      ],
    },
  ],
};

export default data;
