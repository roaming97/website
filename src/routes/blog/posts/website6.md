---
title: Website 6.0 online!
date_created: 2023/09/18
date_modified: 2023/10/01
---

Here it is, version 6. Hopefully it will be the last version for my website I will ever have to write ever, since this will try to host as much of my content as possible.

<br>

My website now is divided into two applications: the frontend and the backend. The backend is an application named **Lavender**, which to quote the `README.md`:

<br>

# Lavender

The backend for my [website](https://roaming97.com). It serves as a quick gateway to an image server I have while being flexible and letting me automate tasks without having to hop back into the Linux server and change things manually.

Lavender is written 100% in **[Rust](https://www.rust-lang.org/)** using the **[Rocket](https://rocket.rs/)** web framework, which is very reminiscent of Flask for Python.

<br>

## Features

-   Get any image from a specified directory on the server as a Base64 encoded string, useful for a constantly changing gallery of media. Static and often requested images stay at the frontend of course.

-   Get a determined amount of the latest images (sorted by date modified) that are in the media directory.

-   Get the total amount of files in the media directory recursively.

-   Configurable settings in a [`lavender.toml`](./lavender.toml) file, such as the specified directory where to look for media, extension settings, and more to be added.

-   A helper route that optimizes all of the images from a specified directory, it only works when providing the right API key though. (This has to be configured by adding a `LAVENDER_API_HASH` environment variable when running the program or to the system's environment variables.)
