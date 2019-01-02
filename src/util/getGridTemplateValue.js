export default function getGridTemplateValue(quantity) {
  let valueArray = [];
  for (let i = 0; i < quantity; i++) {
    valueArray.push('1fr')
  }
  return valueArray.join(' ');
}
