# Searchless
An anti-search engine - it gets your search request and does nothing with it.<br>
Intended for use with a web browser that supports custom search engines.

It took me about an hour to get working.

Your browser needs to support JavaScript's `replaceAll` function for this to work.<br>
Looking for a browser to use this with? I recommend [Ungoogled Chromium](https://github.com/Eloston/ungoogled-chromium).

## How to use
Configure your web browser to use the search engine link as follows:
```url
speedstriker243.github.io/searchless/?q=%s
```
### But I'm on Firefox!
Oh, right... Well, I might work on getting an extension for Firefox and Chrome out there.

## Tracking
Searchless does not track you. At all. We literally just take your request and deny it, nothing else happens -- you can take a look at the code if you want.<br>
Hard to track someone when your main purpose is to be useless, anyway...

## Why use it if it's so useless?
For fun. I also added links to DuckDuckGo, Searx and Qwant as well, which all take the search query you tried to look for and *actually* search for it. So, y'know, it's not THAT useless.
