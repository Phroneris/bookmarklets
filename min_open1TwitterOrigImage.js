javascript:(()=>{window.open(document.querySelector(`${document.querySelectorAll('[role="listitem"]').length==0?'[aria-modal="true"]':`[role="listitem"]:nth-of-type(${document.URL.match(/.*\/photo\/(\d)/)[1]})`} img`).src.replace(/\?format=(\w+)&name=\w+$/,'.$1:orig'))})()