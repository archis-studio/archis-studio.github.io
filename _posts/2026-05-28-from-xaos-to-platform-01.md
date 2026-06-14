---
title:  "From XAOS to Platform #01: Why Building Modern EMS Is Harder Than It Looks"
excerpt: "我還不確定什麼才是好的 EMS 平台，也不確定理想的團隊協作該長什麼樣子。但在參與開發的過程中，我開始看見許多以前從未注意過的事情。"
description: "《From XAOS to Platform》是一份持續更新的觀察筆記。記錄我如何從功能開發者的視角，逐步理解系統設計、平台工程與團隊協作，以及那些課本上學不到的現場問題。"
date: 2026-05-31
last_modified_at: 2026-06-06
categories: [Growth, Software Dev, Green Energy]
tags: [EMS, System Thinking, Engineering Journey, Software Architecture]
featured: true
permalink: /blog/from-xaos-to-platform-00/

header:
  overlay_image: /assets/images/posts/260531-blog-software-banner.png
  overlay_filter: 0.4
  overlay_text_color: "white"
  show_overlay_excerpt: true
  caption: "Blog Journey © Archis Studio"
  teaser: /assets/images/posts/260531-blog-software-banner.png

image: /assets/images/posts/260531-blog-software-banner.png
---

## 🌪️《Prologue：混亂並非來自程式碼》
Hmmm... 這節標題滿有意思的 😎。<br>

先說說這 XAOS 系列文的起源，<br>
去年，我剛好遇到一間剛成立的能源軟體新創。<br>

老實說，我加入的原因很單純。<br>
一方面是因為沒看過一間公司從零開始長大的樣子，覺得很新鮮；<br>
另一方面也是抱著一點好奇心，順便碰個運氣看看自己會不會搭上職涯順風車。

既然又回到軟體工程師這行，<br>
就好好鑽研下去吧，也從技術部落格開始把自己經營起來。

回到工作近況，<br>
只能說軟體新創真的是很恐怖。。。<br>
~~如果有學歷門票的話真的乖一點去大公司上班別來新創抓交替~~

原本覺得 Software Engineer 就是把 code 寫一寫，有什麼好吵的

錯❌<br>
這件事涉及誰去寫、寫什麼、怎麼設計、怎麼文件、怎麼驗收、誰決定等等<br>
種種因素導致窒礙難行<br>
**WTF**

不過我也不知道好的 Teamwork 風格是怎樣<br>
也不確定理想的 EMS (Energy Management System)平台該長什麼樣子，<br>
但在參與開發的過程中，<br>
我開始看見許多以前從未注意過的事情。

而《From XAOS to Platform》這個系列，就是想把這些觀察記錄下來。

> 不是為了給出標準答案。<br>
> 而是記錄一個工程師如何從「寫功能的人」，<br>
> 慢慢開始理解什麼叫做系統、平台，以及那些課堂上學不到的現場問題。


## 🧭《Act I：每個人手上都有不同的地圖》
要打造一個 EMS，<br>
顧名思義就是把各種能源設備接進來，收資料、做監控、做控制、做分析。<br>

聽起來很合理。<br>
於是剛開始的我也覺得：<br>
不就是把設備資料收進來，然後做個 Dashboard 嗎？

結果很快發現事情沒那麼單純。<br>
因為同樣是在做 EMS。<br>
每個人腦中的 EMS 長得完全不一樣 ~~甚至是沒有~~。

學能源的不會寫軟體、<br>
學軟體的不懂現場、設備、能源<br>
再加上 ＰＭ、設計師、前端工程師、主管...<br>
溝通問題跟團隊合作可想而知。。。<br>
就是慘不忍睹 🫣。<br>

~~而且還是新創公司。~~<br>
雖然我有意識到這一定會發生問題，<br>
但我也不知道怎麼處理。

於是乎我想：<br>
自己走一回，以後就知道怎麼解這種問題了。（🍵


## 🏗️《Act II：藍圖開始失控的那一天》
to be continued...


## ⚙️《Act III：系統不只是一堆功能》
Feature Thinking → System Thinking


## 🕸️《Act IV：那些看不見的連結》

## 🏛️《Epilogue：從 XAOS 到 Platform》