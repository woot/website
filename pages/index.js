if (typeof document !== 'undefined' && document) {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5ca0ea4f6bba460528008e51/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
}

export default () => (
  <div className='hello'>
    <img src="/static/woot.png" width="222" height="62" alt="Woot Logo" />
    <p>Something beautiful coming soon</p>
    <p>contact@sergeylukin.com</p>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        color: #7d7d7d;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
    `}</style>
  </div>
)
