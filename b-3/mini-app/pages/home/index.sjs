// pages/index/index.sjs
const getTasksSortedByDate = (tasks) =>
  tasks.sort((a, b) => getDate(b.date) - getDate(a.date));
export default {
  getTasksSortedByDate,
};
