export default interface DataNode {
  name: string;
  path: string;
  child?: DataNode[];
}
