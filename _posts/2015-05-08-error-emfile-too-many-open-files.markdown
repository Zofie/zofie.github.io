---
layout: post
title:  Error: EMFILE, too many open files
date:   2015-05-08 14:25:00
categories: Gulp
---

Gulp watch gave following error:
`Error: EMFILE, too many open files`

The error code EMFILE means that a process is trying to open too many files.
This is because of your system's max opened file limit. For OSX the default
is very low (256). To fix this enter the following command in your terminal:

`sudo launchctl limit maxfiles 10480 10480`

This increases the max opened file and you should be able to run gulp watch again.
