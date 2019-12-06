function setPropsById(props={}, sourceField, dist, src) {
  Object.keys(props).forEach(item => {
    let sourceObj = src.find(i => i[sourceField] === dist.id);

    dist[item] = sourceObj ? 
      sourceObj.hasOwnProperty(props[item]) ? 
      sourceObj[props[item]] : '-'
      : 'Данные не найдены';
  })

  return dist;
}

export { setPropsById };