document.getElementById('fahrenheit').addEventListener('input', function(e){
  let f = e.target.value;
  let k = 459.67;
  document.getElementById('celciusOutput').innerHTML = Math.round(((f - 32) * 5 / 9) * 100) / 100 ;
  document.getElementById('kelvinOutput').innerHTML =  Math.round(((Number(k)+Number(f)) * 5 / 9) * 100) / 100;
})
