import './styles.css';
const KEY='1234';
const form=document.getElementById('gate-form');
const input=document.getElementById('gate-key');
const err=document.getElementById('gate-error');
const content=document.getElementById('dl-content');

form?.addEventListener('submit',(e)=>{
  e.preventDefault();
  if((input.value||'').trim()===KEY){
    sessionStorage.setItem('oe_key_ok','1');
    err.textContent='';
    content.classList.remove('hidden');
    document.getElementById('gate-wrap').classList.add('hidden');
  } else {
    err.textContent='Invalid key.';
  }
});

if(sessionStorage.getItem('oe_key_ok')==='1'){
  document.getElementById('gate-wrap')?.classList.add('hidden');
  content?.classList.remove('hidden');
}
