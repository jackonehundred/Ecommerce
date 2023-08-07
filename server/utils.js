module.exports = {
  addUser: ({ userName }) => {
    return {
      userName,
      userId: userName,
      primaryGroupId: 'mock',
      adminComment: 'mock',
      workStations: 'mock',
    };
  },
};
