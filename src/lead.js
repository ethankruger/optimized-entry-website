function mailtoEncode(s){return encodeURIComponent(s).replace(/%20/g,'+')}
const f=document.getElementById('lead-form');
const msg=document.getElementById('lead-msg');
if(f){
  f.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const name=f.name.value.trim();
    const email=f.email.value.trim();
    const phone=f.phone.value.trim();
    const biz=f.biz.value.trim();
    const needs=[...f.querySelectorAll('input[name="need"]:checked')].map(i=>i.value).join(', ');
    const notes=f.notes.value.trim();
    const subject=`Demo request — ${biz||'Business'}`;
    const body=`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${biz}\nNeeds: ${needs}\nNotes: ${notes}\n\nSource: Optimized Entry website`;
    const mailto=`mailto:hello@optimizedentry.com?subject=${mailtoEncode(subject)}&body=${mailtoEncode(body)}`;
    try{
      await navigator.clipboard?.writeText(body);
      msg.textContent='Details copied. Opening your email client…';
    }catch(_){}
    window.location.href=mailto;
  });
}
