import React, { useState } from "react";

const InviteLink = () => {
  const copyText = "https://wrapbook.com/i/j93kda92";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (copyText) => {
    const ta = document.createElement("textarea");
    ta.innerText = copyText;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    setCopied(true);
  };

  return (
    <>
      <span className="link_invite" onClick={() => copyToClipboard(copyText)}>
        {copyText}
      </span>
      <button
        className="button btn_copy-clipboard"
        onClick={() => copyToClipboard(copyText)}
      >
        Copy to clipboard
      </button>
      {copied ? <span className="copied">Copied!</span> : null}
    </>
  );
};

export default InviteLink;
