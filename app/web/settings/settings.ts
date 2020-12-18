const companyList = {
  a123: 'FK',
  b123: 'Reval',
};

const findCompanyName = (id = '404') => {
  const companyName = companyList[id] || '未知';
  return companyName;
};

const settings = {
  findCompanyName,
};

export default settings;
