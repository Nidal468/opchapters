'use client'

import React from "react";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
    pubbidgeartag: any[];
  }
}

export const Adsense = () => {


  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minWidth: '300px' }}
      data-ad-client="ca-pub-3610508378320499"
      data-ad-slot="7497825413"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export function BidgearAds() {
  useEffect(() => {
    let bidgearAdsScript = document.getElementById("bidgearAdsScript");
    if (!bidgearAdsScript) {
      let script = document.createElement("script");
      script.setAttribute(
        "src",
        "https://platform.bidgear.com/pubbidgear-ad.js",
      );
      script.setAttribute("id", "bidgearAdsScript");
      document.head.appendChild(script);
    }
    const bg_id = document.getElementById("bg-ssp-8308");
    if (bg_id) {
      bg_id.id = "bg-ssp-8270-" + Math.floor(Math.random() * Date.now());
      window.pubbidgeartag = window.pubbidgeartag || [];
      window.pubbidgeartag.push({
        zoneid: 8308,
        id: bg_id.id,
        wu: window.location.href,
      });
    }
  }, []);
  return (
    <>
      <div id="bg-ssp-8308"></div>
    </>
  );
}
export function Adsense2() {
  return (
    <ins className="adsbygoogle"
      style={{ display: "block", minWidth: '250px' }}
      data-ad-format="fluid"
      data-ad-layout-key="+1v+s4-1b-27+96"
      data-ad-client="ca-pub-3610508378320499"
      data-ad-slot="4054803225"></ins>
  )
}
export const Adsense3 = () => {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minWidth: '300px' }}
      data-ad-client="ca-pub-3610508378320499"
      data-ad-slot="8063735961"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};