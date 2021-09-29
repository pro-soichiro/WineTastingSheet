'use strict';
{
  const labels = document.querySelectorAll('label');
  const btn = document.getElementById('btn');
  const l = document.getElementsByClassName('line-through');
  // getElementByClassNameで取得する値は配列ではないので配列に変換する必要がある
  const lines = Array.prototype.slice.call(l);

  labels.forEach(label => {
    label.addEventListener('mouseover', () => {
      label.parentNode.classList.add('appear');
    });
    label.addEventListener('mouseout', () => {
      label.parentNode.classList.remove('appear');
    });
  });


  lines.forEach(line => {
    btn.addEventListener('click', (event) => {
      line.classList.toggle('line-through-on');
      const input = line.childNodes;
      if(line.classList.contains('line-through-on') == true ){
        btn.innerHTML = 'アシスト機能OFF';
      }else{
        btn.innerHTML = 'アシスト機能ON';
      }
      event.preventDefault();
    });
  });



}