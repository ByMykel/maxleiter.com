---
title: Introducing Drift
description: A self-hostable alternative to GitHub Gist and Pastebin
slug: introducing-drift
date: Mar 26, 2022
---

_[View this post on Drift](https://paste.maxleiter.com/post/9d77d452-8ccf-4056-89dd-9bf9f96dfc3c)_

I've wanted a Gist alternative for years, but it wasn't until I saw [this tweet](https://twitter.com/emilyst/status/1499858264346935297) I decided to sit down and build it:

> "What is the absolute closest thing to GitHub Gist that can be self-hosted? In terms of design and functionality. Hosts images and markdown, rendered. Creates links that can be private or public. Uses/requires registration. I have looked at dozens of pastebin-like things." - <a href="https://twitter.com/emilyst" style="color: var(--link);">@emilyst</a>

If your response to that is "why?", I recommend reading ['Why you should start self-hosting'](https://rohanrd.xyz/posts/why-you-should-start-self-hosting/) by Rohan Deshumkh. Also know that I have a habit of starting time consuming weekend projects to procrastinate school work, and this seemed like an especially fun one.

The primary goal of Drift is to capture the value proposition of GitHub. Syntax highlighting, markdown rendering, straight to the point. There are tons of self-hostable pastebins, and none target an experience like Gist. You can try a demo [here](https://drift.maxleiter.com).

Here's a screenshot of the authenticated homepage (don't worry, there's a light theme too):

<img src="/blog/drift/new.png" alt="A page showing the ability to enter a post title and two textboxes: file name and file content. You can also click 'add another file' or 'Create', which is a drop-down with multiple privacy options for creating posts." />

And here's a screenshot of viewing a post, which you can visit in your browser [here](https://paste.maxleiter.com/post/2ad57c13-4c40-4183-b41b-67e127fc5995):

<img src="/blog/drift/view-post.png" alt="A page showing a post title, the ability to download all files a ZIP archive, a dropdown to jump to specific files, and a file titled 'webpack.config.js' with javascript highlighted code." />

For prototyping, I used the [geist-ui library](https://geist-ui.dev) for the basic design components. It's _very_ JavaScript reliant, but I've already begun working on replacing it with in-house elements. So if you're reading this from Hacker News and were planning to complain it doesn't work &mdash; I'm sorry!

Rendering markdown, after multiple iterations, is done and stored on the server. This means that published posts can be rendered at build-time or on the server thanks to Next.js's SSR support. For editing, I've set-up a Next.js lambda function that receives markdown from the client and returns HTML.

Some other features are authentication, drag-and-drop file uploading, password protected posts, and support for GitHub Extended Markdown.

I'm particularly happy with the drag-and-drop uploading tied with the automatic syntax highlighting, as they lead to a great workflow for sharing files, which you can see a demo of here:

<video controls>
    <source src="/blog/drift/view-post-demo.webm" type="video/webm" />
</video>

The majority of these features are largely thanks to the Node and React ecosystems, so thank you to the maintainers of those projects.

If Drift is interesting to you, please feel free to contribute, regardless of skill level. There have already been numerous community contributions, including the logo and docker-compose. I've tried to keep it fairly simple, so the back-end is a simple Express server and the client is a Next.js React app. You can join #drift on [Libera.Chat](https://libera.chat) to get in touch. You can find Drift on GitHub [here](https://github.com/maxleiter/drift).
