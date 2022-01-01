import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export function CopyButton({value}){
    const [copied, setCopied] = useState(false)
    return(
        <CopyToClipboard text={value}
         onCopy={()=> setCopied(true)}
        >
            <button>
                {copied? "Copied": "copy"}
            </button>
        </CopyToClipboard>
    )
}