---
title: My macOS programs and setup
description:
slug: macos-setup
date: Dec 31, 2021
published: true
---

In the off-chance you're reading this today, happy new year! If you're reading this later, I hope $CURRENT_YEAR is treating you well. 

Before this post, I kept a list of my programs in my iCloud in case my computer broke or I was setting up a work laptop. After some recent events, I trust iCloud less than I once did, and figured the list can live here instead. Like the rest of my blog, this exists for me but hopefully you find it useful too. I plan to write an Arch Linux version of this soon. 

I try to use open-source where I can. If you know of an alternative to the few closed applications I use, please let me know!

- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
    - [Chrome](https://www.google.com/chrome/) for testing sites
- [VisualStudio Code](https://code.visualstudio.com/)
- [iTerm 2](https://iterm2.com/) 
- [BetterTouchTool](https://folivora.ai/) allows advanced customization of the touchbar  ($9 after 45 days)
    - [GoldenChaos preset](https://community.folivora.ai/t/goldenchaos-btt-the-complete-touch-bar-ui-replacement/1281)
    ![Image of the GoldenChaos touchbar layout](/blog/macos/touchbar.jpg)
- [Homebrew](https://brew.sh/) is a package manager
    - Handles installing Xcode developer tools
- [Rectangle](https://rectangleapp.com/) lets you resize and snap windows with your keyboard
    ![Image of the Rectangle settings showing it has many options](/blog/macos/rectangle.jpg)
- [Fish](https://fishshell.com/) is user-friendly shell (seriously, I hate zsh/bash now)
    - [Fisher](https://github.com/jorgebucaran/fisher): Fish plugin manager
    - [fish-nvm](https://github.com/jorgebucaran/fish-nvm): [nvm](https://github.com/nvm-sh/nvm) wrapper
- [NextDNS](https://nextdns.io/) is a secure DNS service (I downloaded the macOS client from the App Store)
- [LastPass](https://www.lastpass.com/) is my password manager, but I'm currently looking to start self-hosting.
- [Insomnia](https://insomnia.rest/) is my favorite REST client
- [IINA](https://iina.io/) is a nice media player 
- [VIA Configurator](https://caniusevia.com/) configures my keyboard
- [Lagrange](https://github.com/skyjake/lagrange) for viewing Gemini articles
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) is my node package manager of choice
- [MySQL Workbench](https://www.mysql.com/products/workbench/) for managing my few MySQL servers
- [TeXMaker](https://www.xm1math.net/texmaker/) for the rare times I need to write LaTeX
- I'm going to try and use the Slack and Zoom browser versions
- Qemu: `brew install qemu`
- thefuck: `brew install thefuck`, command line correction tool
    - Add `thefuck --alias | source` to `~/.config/fish/config.fish`
- imagemagick: `brew install imagemagick`
- ffmpeg: `brew install ffmpeg`
