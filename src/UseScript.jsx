import React from "react";
import { useEffect } from "react";

//Zoho Sales Iq Script:
const UseScript = (url, widgetCode, minimizeCB) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");

    let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){
        $zoho.salesiq.floatbutton.visible('hide');
}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "";`;

    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default function SalesIQ(props = {}) {
  useEffect(() => {
    let { isChatOpen } = props;
    window.$zoho &&
      window.$zoho.salesiq.floatwindow.visible(isChatOpen ? "show" : "hide");
  }, [props]);

  return (
    <React.Fragment>
      {UseScript(
        "https://salesiq.zoho.in/widget",
        "80d0b7990b01213bbcb6d7067df9037c3daca3d2252ea722931cb3e7d3537853eb70d3dd37c1885b9dc1072623e93af5"
      )}
    </React.Fragment>
  );
}
